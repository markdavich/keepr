using System.ComponentModel.DataAnnotations;

namespace Keepr.Models
{
  public class Keep
  {
    int keep_id {get; set;}
    [Required]
    string keep_name {get; set;}
    [Required]
    string keep_description {get; set;}
    [Required]
    string user_id {get; set;}
    [Required]
    string keep_img_url {get; set;}
    bool keep_private {get; set;} = false;
    int keep_view_count {get; set;} = 0;
    int keep_share_count {get; set;} = 0;
    int keep_keep_count {get; set;} = 0;
  }
}