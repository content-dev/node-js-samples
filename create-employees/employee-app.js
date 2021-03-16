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
  let sql, binds, options, result;

  console.log('Performing DB operations in: ' + values.CONNECT_STR);

    try {
      connection = await oracledb.getConnection(  {
       user          : values.DB_USER,
       password      : values.DB_PASSWORD,
       connectString : values.CONNECT_STR
     });


    console.log('Dropping table... ');
    //Drop table first
    await connection.execute(
      `BEGIN
         EXECUTE IMMEDIATE 'DROP TABLE cloud_employees';
         EXCEPTION
         WHEN OTHERS THEN
           IF SQLCODE NOT IN (-00942) THEN
             RAISE;
           END IF;
       END;`);

    console.log('Creating CLOUD_EMPLOYEES table...');   
    // Create a table
    await connection.execute(
      `CREATE TABLE CLOUD_EMPLOYEES (
          ID VARCHAR2(64) NOT NULL, 
          FIRST_NAME VARCHAR2(32) NOT NULL, 
          LAST_NAME VARCHAR2(32), 
          EMAIL VARCHAR2(64) NOT NULL, 
          PHONE VARCHAR2(16), 
          BIRTH_DATE DATE, 
          TITLE VARCHAR2(64) NOT NULL, 
          DEPARTMENT NUMBER(8) NOT NULL, 
          CONSTRAINT CLOUD_EMPLOYEES_PK PRIMARY KEY 
          (ID, EMAIL)
          ENABLE                   
          )`);

    // Insert some data
    // notice it's not zero index
    sql = `INSERT INTO cloud_employees VALUES (:1, :2, :3, :4, :5, :6, :7, :8)`;
    binds = [ 
        ['1ASD', 'Hugh', 'Jast', 'hugh.jast@example.com', '730-715-4446', new Date('1970-11-28'), 'National Data Strategist', 10 ],
        ['2MNB', 'Novella', 'Bahringer', 'novella.bahringer@example.com', '293-596-3547', new Date('1961-07-25'), 'Principal Factors Architect', 41], 
        ['3ZXC', 'Reed', 'Hahn', 'reed.hahn@example.com', '429-071-2018', new Date('1977-02-05'), 'Future Directives Facilitator', 31 ]
     ];
    options = {
      autoCommit: true,
      bindDefs: [
        { type: oracledb.STRING, maxSize: 64 },
        { type: oracledb.STRING, maxSize: 32 },
        { type: oracledb.STRING, maxSize: 32 },
        { type: oracledb.STRING, maxSize: 64 },
        { type: oracledb.STRING, maxSize: 16 },
        { type: oracledb.DATE },
        { type: oracledb.STRING, maxSize: 64 },
        { type: oracledb.NUMBER }
      ]
    };

    console.log('Inserting data into CLOUD_EMPLOYEES table...');   
    await connection.executeMany(sql, binds, options);

    // Query employees data
    sql = `SELECT * FROM cloud_employees`;
    binds = {};
    options = {};
    
    console.log('Querying data from CLOUD_EMPLOYEES table...');   
    result = await connection.execute(sql, binds, options);
    console.log('Retrieved employees data from ATP database...');
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