using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultService: BaseApiService<Vault>
  {
    public VaultService(VaultRepository repo): base(repo)
    {
      
    }
  }
}