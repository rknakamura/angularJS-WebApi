using Class = AnyFunctionality.Core;
using AnyFunctionality.Core.Interfaces;
using AnyFunctionality.Data;
using Ninject.Modules;

namespace AnyFunctionality.WebApi
{
    public class DependencyModule : NinjectModule
    {
        public override void Load()
        {
            this.Bind<ICore>().To<Class.Core>();
            this.Bind<IRepository>().To<Repository>();
        }
    }
}