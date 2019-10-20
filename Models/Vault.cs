using System.ComponentModel.DataAnnotations;

namespace Keepr.Models
{
  public class Vault
  {
    public int vault_id { get; set; }
    [Required]
    public string vault_name { get; set; }
    [Required]
    public string vault_description { get; set; }
    [Required]
    public string user_id { get; set; }
  }
}