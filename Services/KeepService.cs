using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class KeepService : BaseApiService<Keep>
  {
    public KeepService(KeepRepository repo) : base(repo)
    {

    }

  }
}