using System;
using Ninject.Modules;
using AnyFunctionality.Core;
using AnyFunctionality.Core.Interfaces;
using AnyFunctionality.Data;

namespace WebApi.AnyFunctionality
{
    public class DepencyModule : NinjectModule
    {
        public override void Load()
        {
            this.Bind<ICore>().To<Core>();
            this.Bind<IRepository>().To<Repository>();
        }
    }
}