using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Keepr.Services;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace Keepr.Controllers
{
  [ApiController]
  public abstract class BaseApiController<T> : ControllerBase
  {
    public readonly BaseApiService<T> _service;
    public BaseApiController(BaseApiService<T> service)
    {
      _service = service;
    }

    [HttpGet]
    public virtual ActionResult<IEnumerable<T>> Get()
    {
      try
      {
        return Ok(_service.Get());
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    [HttpGet("{id}")]
    public virtual ActionResult<T> Get(int id)
    {
      try
      {
        return Ok(_service.Get(id));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    [Authorize]
    [HttpPost]
    public virtual ActionResult<T> Create([FromBody] T data)
    {
      try
      {
        string user_id = HttpContext.User.FindFirstValue("user_id");
        return Ok(_service.Create(data, user_id));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }

    [Authorize]
    [HttpPut("{id}")]
    public virtual ActionResult<T> Edit([FromBody] T data, int id)
    {
      try
      {
        return Ok(_service.Edit(data, id));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }

  }
}