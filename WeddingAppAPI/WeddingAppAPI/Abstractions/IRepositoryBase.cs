using System.Linq.Expressions;
using WeddingAppAPI.Applications.Interfaces;

namespace WeddingAppAPI.Abstractions
{
    public interface IRepositoryBase<TEntity, in TKey> where TEntity : class
    {
        IQueryable<TEntity> FindAll(params Expression<Func<TEntity, object>>[] includeProperties);

        IQueryable<TEntity> FindAll(Expression<Func<TEntity, bool>> predicate, params Expression<Func<TEntity, object>>[] includeProperties);

        Task<TEntity> FindByIdAsync(TKey id, CancellationToken cancellationToken = default, params Expression<Func<TEntity, object>>[] includeProperties);

        Task<TEntity> FindSingleAsync(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellationToken = default, params Expression<Func<TEntity, object>>[] includeProperties);

        void Add(TEntity entity);

        void Update(TEntity entity);

        void Update<T>(T entity,byte[] originalRowVersion) where T : class, IHasRowVersion;

        void Remove(TEntity entity);

        Task RemoveAsync(TKey id, CancellationToken cancellationToken = default);

        void RemoveMultiple(List<TEntity> entities);
    }
}
