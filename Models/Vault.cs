using System.ComponentModel.DataAnnotations;

namespace Keepr.Models
{
  public class Vault
  {
    int vault_id { get; set; }
    [Required]
    string vault_name { get; set; }
    [Required]
    string vault_description { get; set; }
    [Required]
    string user_id { get; set; }
  }
}