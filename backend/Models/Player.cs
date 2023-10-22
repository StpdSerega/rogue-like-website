namespace backend.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string Nickname { get; set; }
        public int Score { get; set; }
        public TimeSpan Time { get; set; }
    }
}