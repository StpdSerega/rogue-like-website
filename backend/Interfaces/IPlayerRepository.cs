using backend.Models;

namespace backend.Interfaces
{
    public interface IPlayerRepository
    {
        ICollection<Player> GetPlayers();
        Player GetPlayer(int playerId);
        bool PlayerExist(int playerId);
        bool CreatePlayer(Player player);
        bool UpdatePlayer(Player player);
        bool DeletePlayer(Player player);
        bool Save();
    }
}