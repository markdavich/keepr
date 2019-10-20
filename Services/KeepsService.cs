using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class KeepsService : BaseApiService<Keep>
  {
    public KeepsService(KeepRepository repo) : base(repo)
    {

    }

  }
}