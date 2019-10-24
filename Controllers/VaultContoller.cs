using System;
using System.Collections.Generic;
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

    [HttpGet("{vaultId}/keeps")]
    public virtual ActionResult<IEnumerable<Keep>> GetKeepsByVaultId(int vaultId)
    {
      try
      {
        return Ok(_vaultService.GetKeepsByVaultId(vaultId));
      }
      catch (Exception error)
      {
        return BadRequest(error.Message);
      }
    }

    [HttpGet("user")]
    public override ActionResult<IEnumerable<Vault>> GetByLoggedInUser()
    {
      string userId = HttpContext.User.FindFirstValue("user_id");
      try
      {
        return Ok(_vaultService.GetByUserId(userId));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }
  }
}