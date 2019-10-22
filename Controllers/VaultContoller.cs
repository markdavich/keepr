using System;
using System.Security.Claims;
using Keepr.Models;
using Keepr.Services;
// using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;

namespace Keepr.Controllers
{
  [Route("/api/[controller]")]
  public class VaultsController : BaseApiController<Vault>
  {
    private VaultService _vaultService;
    public VaultsController(VaultService service) : base(service)
    {
      _vaultService = service;
    }

    [HttpPost("{vaultId}/keeps")]
    public ActionResult<Keep> AddKeepToVault([FromBody] VaultKeepMap vkm)
    {
      try
      {
          vkm.user_id = HttpContext.User.FindFirstValue("user_id");
          return Ok(_vaultService.AddKeepToVault(vkm));
      }
      catch (Exception error)
      {
          return BadRequest(error.Message);
      }
    }
  }
}