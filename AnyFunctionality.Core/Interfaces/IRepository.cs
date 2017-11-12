using AnyFunctionality.Core.Entities;
using System.Collections.Generic;

namespace AnyFunctionality.Core.Interfaces
{
    public interface IRepository
    {
        IEnumerable<Item> Get();
        int Insert(Item item);
        void Delete(int id);
    }
}
