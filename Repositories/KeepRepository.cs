using System.Data;
using Keepr.Models;

namespace Keepr.Repositories
{
  public class KeepRepository : BaseApiRepository<Keep>
  {
    public KeepRepository(IDbConnection db) : base(db, "keep")
    {

    }
  }
}