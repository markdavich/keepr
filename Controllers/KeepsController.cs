using System;
using Keepr.Models;
using Keepr.Services;
using Microsoft.AspNetCore.Mvc;
// using Microsoft.AspNetCore.Components; // Dont't use this

namespace Keepr.Controllers
{
  [Route("api/[controller]")]
  public class KeepsController : BaseApiController<Keep>
  {
    private KeepsService _keepService;
    public KeepsController(KeepsService service) : base(service)
    {
      _keepService = service;
    }

    [HttpPut("{keepId}/view")]
    public ActionResult<Keep> ViewKeep(int keepId)
    {
      try
      {
        return Ok(_keepService.ViewKeep(keepId));
      }
      catch (Exception error)
      {
        return BadRequest(error.Message);
      }
    }
  }
}