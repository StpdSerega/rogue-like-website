using backend.Data;
using backend.Interfaces;
using backend.Models;

namespace backend.Repository
{
    public class PlayerRepository : IPlayerRepository
    {
        private readonly DataContext _context;

        public PlayerRepository(DataContext context)
        {
            _context = context;
        }

        public bool CreatePlayer(Player player)
        {
            _context.Add(player);
            return Save();
        }

        public bool DeletePlayer(Player player)
        {
            _context.Remove(player);
            return Save();
        }

        public Player GetPlayer(int playerId)
        {
            return _context.Players.Where(p => p.Id == playerId).FirstOrDefault();
        }

        public ICollection<Player> GetPlayers()
        {
            return _context.Players.OrderByDescending(p => p.Score).ToList(); 
        }

        public bool PlayerExist(int playerId)
        {
            return _context.Players.Any(p => p.Id == playerId);
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool UpdatePlayer(Player player)
        {
            _context.Update(player);
            return Save();
        }
    }
}