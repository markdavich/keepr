using System;
using System.Collections.Generic;
using System.Data;
using System.Reflection;
using Dapper;

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

    internal string GetUpdateSql(int entity_id)
    {
      PropertyInfo[] propertyInfoArray = typeof(T).GetProperties();
      string id_column = _table + "_id";
      bool first = true;
      string result = $"update `{_table}` set";

      foreach (PropertyInfo propertyInfo in propertyInfoArray)
      {
        string column_name =
            _table + "_" + propertyInfo.GetValue(propertyInfo, null).ToString();

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

      result += $" where `{id_column}` = {entity_id};\n";
      result += $"select * from {_table} where `{id_column}` = {entity_id};";

      return result;
    }

    internal string GetCreateSql(string user_id)
    {
      PropertyInfo[] propertyInfoArray = typeof(T).GetProperties();
      string id_column = _table + "_id";
      bool first = true;
      string columns = "";
      string values = "";

      foreach (PropertyInfo propertyInfo in propertyInfoArray)
      {
        string column_name =
            _table + "_" + propertyInfo.GetValue(propertyInfo, null).ToString();

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

      string result = $"insert into `{_table}` ({columns}) values ({values});\n";
      result += "select last_insert_id();";

      return result;
    }

    internal IEnumerable<T> Get()
    {
      string sql = $"SELECT * FROM {_table}";
      return _db.Query<T>(sql);
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