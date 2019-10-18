using Keepr.Models;
using Keepr.Services;
using Microsoft.AspNetCore.Components;

namespace Keepr.Controllers
{
  [Route("/api/[controller]")]
  public class KeepController: BaseApiController<Keep>
  {
    public KeepController(BaseApiService<Keep> service) : base(service)
    {
      
    }
  }
}