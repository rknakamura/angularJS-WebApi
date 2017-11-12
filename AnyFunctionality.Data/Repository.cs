using System;
using System.Collections.Generic;
using AnyFunctionality.Core.Entities;
using AnyFunctionality.Core.Interfaces;
using System.Data.Entity;
using System.Linq;

namespace AnyFunctionality.Data
{
    public class Repository : IRepository
    {
        public void Delete(int id)
        {
            using (var context = new DatabaseDemoEntities())
            {
                var item = context.Table.Find(id);

                context.Table.Remove(item);
                context.SaveChanges();
            }
        }

        public IEnumerable<Item> Get()
        {

            var items = new List<Item>();
            using (var context = new DatabaseDemoEntities())
            {
                items.AddRange(context.Table.Select(item => new Item
                {
                    Id = item.Id,
                    Name = item.Name
                }));
            }

            return items;
        }

        public int Insert(Item item)
        {
            using (var context = new DatabaseDemoEntities())
            {
                var tableItem = new Table
                {
                    Name = item.Name
                };

                context.Table.Add(tableItem);
                context.SaveChanges();

                return tableItem.Id;
            }
        }
    }
}
