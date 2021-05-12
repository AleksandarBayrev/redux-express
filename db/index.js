const mysql = require('mysql')
const { MySQLConfiguration } = require('../config')
const DBConnection = mysql.createConnection(MySQLConfiguration)
DBConnection.connect()

module.exports = DBConnection