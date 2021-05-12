const Queries = {
    SELECT: (table) => `SELECT * FROM ${table}`,
    INSERT: (table, columns, values) => `INSERT INTO ${table}(${columns.join(',')}) VALUES(${values.map(x => "'"+x+"'").join(',')})` 
}

module.exports = {
    Queries
}