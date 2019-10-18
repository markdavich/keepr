using Keepr.Models;
using Keepr.Services;
// using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;

namespace Keepr.Controllers
{
  [Route("/api/[controller]")]
  public class VaultController : BaseApiController<Vault>
  {
    public VaultController(BaseApiService<Vault> service) : base(service)
    {

    }
  }
}