using System;
using System.Collections.Generic;
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

    public IEnumerable<Keep> GetKeepsByVaultId(int vaultId)
    {
      return _vaultRepo.GetKeepsByVaultId(vaultId);
    }

    public override IEnumerable<Vault> GetByUserId(string userId)
    {
      return _vaultRepo.GetByUserId(userId);
    }
  }
}