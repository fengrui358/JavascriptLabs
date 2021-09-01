using System;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace DeviceLabServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestApisController : ControllerBase
    {
        [Route("/api/getImage")]
        [HttpPost]
        public IActionResult GetImage(int? index)
        {
            var files = Directory.GetFiles(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Images"), $"{index}.jpg");
            if (files.Any())
            {
                return new FileContentResult(System.IO.File.ReadAllBytes(files[0]), "image/jpeg");
            }

            return NotFound();
        }
    }
}
