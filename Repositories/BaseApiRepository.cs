using System.Collections.Generic;
using System.Data;
using Dapper;

using System.Reflection;

namespace Keepr.Repositories
{
  public abstract class BaseApiRepository<T>
  {
    private readonly IDbConnection _db;
    private readonly string _table;
    public BaseApiRepository(IDbConnection db, string tablename)
    {
      _db = db;
      _table = tablename;
    }

    private string GetUpdateSql(int entity_id)
    {
      IEnumerable<PropertyInfo> propertyInfoArray = typeof(T).GetTypeInfo().DeclaredProperties;
      string id_column = _table + "_id";
      bool first = true;
      string result = $"update `{_table}` set";

      foreach (PropertyInfo propertyInfo in propertyInfoArray)
      {
        string column_name = propertyInfo.Name;

        if (column_name == id_column)
        {
          continue;
        }

        if (first)
        {
          result += $" `{column_name}` = @{column_name}";
          first = false;
        }
        else
        {
          result += $", `{column_name}` = @{column_name}";
        }
      }

      result += $" where `{id_column}` = {entity_id};";
      result += $"select * from {_table} where `{id_column}` = {entity_id};";

      return result;
    }

    internal string GetCreateSql(string user_id)
    {
      IEnumerable<PropertyInfo> propertyInfoArray = typeof(T).GetTypeInfo().DeclaredProperties;
      string id_column = _table + "_id";
      bool first = true;
      string columns = "";
      string values = "";

      foreach (PropertyInfo propertyInfo in propertyInfoArray)
      {
        string column_name = propertyInfo.Name;

        if (column_name == id_column)
        {
          continue;
        }

        if (first)
        {
          columns += $"`{column_name}`";

          values += column_name == "user_id" ? $"'{user_id}'" : $"@{column_name}";
          //   values += $"@{column_name}";
          first = false;
        }
        else
        {
          columns += $", `{column_name}`";
          values += column_name == "user_id" ? $", '{user_id}'" : $", @{column_name}";
          //   values += $", @{column_name}";
        }
      }

      string result = $"insert into `{_table}` ({columns}) values ({values});";
      result += "select last_insert_id();";

      return result;
    }

    public IEnumerable<T> Get()
    {
      string sql = $"SELECT * FROM {_table};";
      IEnumerable<T> result = _db.Query<T>(sql);
      return result;
      // return _db.Query<T>(sql);
    }
    internal T Get(int id)
    {
      string sql = $"SELECT * FROM {_table} WHERE {_table}_id = @id";
      return _db.QueryFirstOrDefault<T>(sql, new { id });
    }

    internal int Create(T data, string user_id)
    {
      string sql = GetCreateSql(user_id);
      return _db.ExecuteScalar<int>(sql, data);
    }

    internal T Edit(T data, int id)
    {
      string sql = GetUpdateSql(id);
      return _db.QueryFirstOrDefault<T>(sql, data);
    }
  }
}