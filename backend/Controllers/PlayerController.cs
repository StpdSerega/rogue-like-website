using backend.Interfaces;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class PlayerController : Controller
    {
        private readonly IPlayerRepository _playerRepository;

        public PlayerController(IPlayerRepository playerRepository)
        {
            _playerRepository = playerRepository;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Player>))]
        public IActionResult GetPlayers()
        {
            var players = _playerRepository.GetPlayers();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(players);

        }

        [HttpGet("{playerId}")]
        [ProducesResponseType(200, Type = typeof(Player))]
        [ProducesResponseType(400)]
        public IActionResult GetPlayer(int playerId)
        {
            if (!_playerRepository.PlayerExist(playerId))
                return NotFound();

            var player = _playerRepository.GetPlayer(playerId);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(player);

        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreatePlayer([FromBody] Player playerCreate)
        {
            if (playerCreate == null)
                return BadRequest(ModelState);

            var player = _playerRepository.GetPlayers()
                .Where(p => p.Nickname.Trim().ToUpper() == playerCreate.Nickname.Trim().ToUpper()).FirstOrDefault();

            if (player != null)
            {
                ModelState.AddModelError("", "Player already exists");
                return StatusCode(422, ModelState);
            }

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_playerRepository.CreatePlayer(playerCreate))
            {
                ModelState.AddModelError("", "Someting went wrong while saving");
                return StatusCode(500, ModelState);
            }

            return Ok("Successfully created");
        }

        [HttpPut("{playerId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult UpdateCategory(int playerId, [FromBody] Player updatedPlayer)
        {
            if (updatedPlayer == null)
                return BadRequest(ModelState);

            if (playerId != updatedPlayer.Id)
                return BadRequest(ModelState);

            if (!_playerRepository.PlayerExist(playerId))
                return NotFound();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_playerRepository.UpdatePlayer(updatedPlayer))
            {
                ModelState.AddModelError("", "Something went wrong updating player");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }

        [HttpDelete("{playerId}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeletecPlayer(int playerId)
        {
            if (!_playerRepository.PlayerExist(playerId))
                return NotFound();

            var categoryToDelete = _playerRepository.GetPlayer(playerId);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!_playerRepository.DeletePlayer(categoryToDelete))
            {
                ModelState.AddModelError("", "Something went wrong deleting player");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }
    }
}