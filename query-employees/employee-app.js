'use strict';

const values = require('./const-values');
const oracledb = require('oracledb');
try {
    oracledb.initOracleClient({libDir: values.INSTANT_CLIENT});
  } catch (err) {
    console.error('Something went wrong.');
    console.error(err);
    process.exit(1);
}

async function run() {
 let connection;
 let sql, result;

 console.log('Querying data from: ' + values.CONNECT_STR);

 try {
   connection = await oracledb.getConnection(  {
    user          : values.DB_USER,
    password      : values.DB_PASSWORD,
    connectString : values.CONNECT_STR
  });

    // Query Employees data
    sql = `SELECT * FROM Employees`;
    binds = {};
    options = {};

    result = await connection.execute(sql);
    console.log('Retrieved data from ATP database...');
    console.log(result.rows);

 } catch (err) {
   console.error(err);
 } finally {
   if (connection) {
     try {
    await connection.close();
     } catch (err) {
    console.error(err);
     }
   }
 }
}
 
run();