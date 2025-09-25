namespace WeddingAppAPI.Applications.Interfaces
{
    public interface IHasRowVersion
    {
        byte[] RowVersion { get; set; }
    }
}
