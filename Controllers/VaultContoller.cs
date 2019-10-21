using Keepr.Models;
using Keepr.Services;
// using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;

namespace Keepr.Controllers
{
  [Route("/api/[controller]")]
  public class VaultsController : BaseApiController<Vault>
  {
    public VaultsController(VaultService service) : base(service)
    {

    }
  }
}