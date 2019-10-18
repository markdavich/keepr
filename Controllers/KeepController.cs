using Keepr.Models;
using Keepr.Services;
// using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;

namespace Keepr.Controllers
{
  [Route("api/[controller]")]
  public class KeepsController : BaseApiController<Keep>
  {
    public KeepsController(BaseApiService<Keep> service) : base(service)
    {

    }
  }
}