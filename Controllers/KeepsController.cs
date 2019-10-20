using Keepr.Models;
using Keepr.Services;
using Microsoft.AspNetCore.Mvc;
// using Microsoft.AspNetCore.Components; // Dont't use this

namespace Keepr.Controllers
{
  [Route("api/[controller]")]
  public class KeepsController : BaseApiController<Keep>
  {
    public KeepsController(KeepsService service) : base(service)
    { }
  }
}