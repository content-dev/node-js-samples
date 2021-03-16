
# Node.js Samples - Connecting to Oracle Autonomous Transaction Processing (ATP)

These projects show you how to connect to an ATP database from Node.js.

## Prerequisites

1. Node.js 14 or newer
    * [Download node.js](https://nodejs.org/en/download/ "Node.js Homepage")
    * Verify if installed
        ```
        node -v
        ```
2. Oracle Instant Client 19.9 or newer
    * [Download Instant Client](https://www.oracle.com/database/technologies/instant-client/downloads.html "Oracle Instant Client Downloads")
    * For Windows select the [Basic Package](https://www.oracle.com/database/technologies/instant-client/winx64-64-downloads.html "Basic Package")
3. Node.js database driver
    * ``` npm install oracledb ```
4. Access to an ATP instance and its security credentials (Oracle ATP Wallet)
    * [Download Client Credentials (Wallets)](https://docs.oracle.com/en/cloud/paas/autonomous-database/adbsa/connect-download-wallet.html#GUID-B06202D2-0597-41AA-9481-3B174F75D4B1 "ATP Wallet doc")
    * Your database has the  [EMPLOYEES table](../node-js-samples/sql-scripts/table-setup.sql) with some [sample data](../node-js-samples/sql-scripts/sample-data.sql) to query.
5. Configured TNS
    * For Unix/Linux  
      ``` export TNS_ADMIN=/home/adb_credentials ```
    * For Windows  
      ``` set TNS_ADMIN=d:\myapp\adb_credentials ```
  
#

## Pull node-js-samples from GitHub

* Clone project
  ```
  git clone https://github.com/content-dev/node-js-samples.git
  ```
* Navigate to node-js-samples directory
  ```
  cd node-js-samples
  ```
* Install oracledb module
  ``` 
  npm install oracledb 
  ```

## Explore Query Employees project

* Navigate to query-employees project
  ```
  cd query-employees
  ```
* Add your instant client, connection string, and database credentials to `const-values.js`


* Run the application
  ```
  node employee-app.js
  ```



## Explore Create Employees project

* Navigate to query-employees project
  ```
  cd create-employees
  ```

* Add your instant client, connection string, and database credentials to `const-values.js`

* Run the application
  ```
  node employee-app.js
  ```

## SQL scripts for employee app

* Navigate to `sql-scripts` directory 
* Setup a user for your employees app
  ```
  user-setup.sql
  ```

* Create the employees table for your app
  ```
  table-setup.sql
  ```

* Insert sample data for your app
  ```
  sample-data.sql
  ```
