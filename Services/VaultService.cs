using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultService : BaseApiService<Vault>
  {
    private VaultRepository _vaultRepo;
    public VaultService(VaultRepository repo) : base(repo)
    {
      _vaultRepo = repo;
    }

    public Keep AddKeepToVault(VaultKeepMap vkm)
    {
      return _vaultRepo.AddKeepToVault(vkm);
    }
  }
}