using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using WeddingAppAPI.Abstractions;
using WeddingAppAPI.Infrastructure;

namespace WeddingAppAPI.Repositories
{
    public class RepositoryBase<TEntity, TKey> : IRepositoryBase<TEntity, TKey>, IDisposable
        where TEntity : DomainEntity<TKey>
    {
        private readonly ApplicationDbContext _context;

        public RepositoryBase(ApplicationDbContext context)
        {
            _context = context;
        }

        public void Dispose()
        {
            _context?.Dispose();
        }

        // Haven't reached to DB to fetch data so this is not case IO-Bound
        public IQueryable<TEntity> FindAll(params Expression<Func<TEntity, object>>[] includeProperties)
        {
            IQueryable<TEntity> items = _context.Set<TEntity>().AsNoTracking();
            if (includeProperties != null)
                foreach (var includeProperty in includeProperties)
                    items = items.Include(includeProperty);
            return items;
        }

        // Haven't reached to DB to fetch data so this is not case IO-Bound
        public IQueryable<TEntity> FindAll(Expression<Func<TEntity, bool>> predicate,
            params Expression<Func<TEntity, object>>[] includeProperties)
        {
            IQueryable<TEntity> items = _context.Set<TEntity>().AsNoTracking();
            if (includeProperties != null)
                foreach (var includeProperty in includeProperties)
                    items = items.Include(includeProperty);
            return items.Where(predicate);
        }

        // IO-Bound
        public async Task<TEntity> FindByIdAsync(TKey id, CancellationToken cancellationToken, params Expression<Func<TEntity, object>>[] includeProperties)
        {
            return await FindAll(includeProperties).SingleOrDefaultAsync(x => x.Id.Equals(id), cancellationToken);
        }

        // IO-Bound
        public async Task<TEntity> FindSingleAsync(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellationToken,
            params Expression<Func<TEntity, object>>[] includeProperties)
        {
            return await FindAll(includeProperties).SingleOrDefaultAsync(predicate, cancellationToken);
        }

        // Working side by side with unitOfWork, this method just change status and is not in case IO-Bound
        public void Add(TEntity entity)
        {
            _context.Add(entity);
        }

        // Working side by side with unitOfWork, this method just change status and is not in case IO-Bound
        public void Update(TEntity entity)
        {
            _context.Set<TEntity>().Update(entity);
        }

        // Working side by side with unitOfWork, this method just change status and is not in case IO-Bound
        public void Remove(TEntity entity)
        {
            _context.Set<TEntity>().Remove(entity);
        }

        public async Task RemoveAsync(TKey id, CancellationToken cancellationToken)
        {
            var entity = await FindByIdAsync(id, cancellationToken);
            Remove(entity);
        }

        // Working side by side with unitOfWork, this method just change status and is not in case IO-Bound
        public void RemoveMultiple(List<TEntity> entities)
        {
            _context.Set<TEntity>().RemoveRange(entities);
        }
    }
}
