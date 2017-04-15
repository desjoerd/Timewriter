using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeSjoerd.Timewriter.Web.ApiControllers
{
    [Route("/api/[controller]")]
    public class PingController : Controller
    {
        [HttpGet()]
        [ProducesResponseType(200, Type = typeof(DateTime))]
        public IActionResult Ping()
        {
            return Ok(DateTime.UtcNow);
        }

        [Authorize("Authenticated")]
        [HttpGet("Secure")]
        [ProducesResponseType(200, Type = typeof(DateTime))]
        public IActionResult PingSecure()
        {
            return Ok(DateTime.UtcNow);
        }
    }
}
