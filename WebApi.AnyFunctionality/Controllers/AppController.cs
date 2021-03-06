﻿using AnyFunctionality.Core.Entities;
using AnyFunctionality.Core.Interfaces;
using System.Collections.Generic;
using System.Web.Http;
using WebApi.AnyFunctionality.Models;

namespace WebApi.AnyFunctionality.Controllers
{
    [RoutePrefix("api/apps")]
    public class AppController : ApiController
    {
        private ICore _core;

        public AppController(ICore core)
        {
            _core = core;
        }

        [Route("")]
        public IEnumerable<Item> Get()
        {
            return _core.Get();
        }

        [Route("")]
        public int Post(Item item)
        {
            return _core.Save(item);
        }

        [Route("")]
        public void Delete(int id)
        {
            _core.Remove(id);
        }
    }
}
