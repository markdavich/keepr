using System.ComponentModel.DataAnnotations;

namespace Keepr.Models
{
  public class VaultKeepMap
  {
    [Required]
    public int vault_id {get; set;}
    
    [Required]
    public int keep_id {get; set;}

    [Required]
    public string user_id {get; set;}
  }
}