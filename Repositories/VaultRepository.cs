using System.Data;
using Keepr.Models;

namespace Keepr.Repositories
{
  public class VaultRepository : BaseApiRepository<Vault>
  {
    public VaultRepository(IDbConnection db) : base(db, "vault")
    {

    }
  }
}