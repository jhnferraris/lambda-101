"use strict";

var pg = require("pg");
var client = new pg.Client({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'dbname',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  port: 5432
})
client.connect();

exports.handler = function( event, context, callback ) {
         client.query('SELECT name from employees limit 1')
            .then(result => console.log(result.rows[0].name))
            .catch(e => console.error(e.stack))
            .then(() => client.end())
}
