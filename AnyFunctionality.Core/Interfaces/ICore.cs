using AnyFunctionality.Core.Entities;
using System.Collections.Generic;

namespace AnyFunctionality.Core.Interfaces
{
    public interface ICore
    {
        IEnumerable<Item> Get();
        int Save(Item item);
        void Remove(int id);
    }
}
