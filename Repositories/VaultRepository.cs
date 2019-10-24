using System;
using System.Collections.Generic;
using System.Data;
using Dapper;
using Keepr.Models;

namespace Keepr.Repositories
{
  public class VaultRepository : BaseApiRepository<Vault>
  {
    private IDbConnection _vaultDb;
    public VaultRepository(IDbConnection db) : base(db, "vault")
    {
      _vaultDb = db;
    }

    public Keep AddKeepToVault(VaultKeepMap vkm)
    {
      string sql = $"call AddKeepToVault(@keep_id, @vault_id, @user_id);";
      return _vaultDb.QueryFirst<Keep>(sql, vkm);
    }

    public IEnumerable<Keep> GetKeepsByVaultId(int vaultId)
    {
      string sql = $"call SelectVaultKeeps(@vaultId);";
      return _vaultDb.Query<Keep>(sql, new { vaultId });
    }

    public override IEnumerable<Vault> GetByUserId(string userId)
    {
      string sql = $"call SelectUserVaults(@userId);";
      IEnumerable<Vault> result = _vaultDb.Query<Vault>(sql, new { userId });
      return result;
    }
  }
}