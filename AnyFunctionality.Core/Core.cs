using System.Collections.Generic;
using AnyFunctionality.Core.Entities;
using AnyFunctionality.Core.Interfaces;

namespace AnyFunctionality.Core
{
    public class Core : ICore
    {
        private IRepository _repository;

        public Core(IRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<Item> Get()
        {
            return _repository.Get();
        }

        public void Remove(int id)
        {
            _repository.Delete(id);
        }

        public int Save(Item item)
        {
            return _repository.Insert(item);
        }
    }
}
