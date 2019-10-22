using System;
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

    internal Keep AddKeepToVault(VaultKeepMap vkm)
    {
      string sql = $"call AddKeepToVault(@keep_id, @vault_id, @user_id);";
      return _vaultDb.QueryFirst<Keep>(sql, vkm);
    }
  }
}