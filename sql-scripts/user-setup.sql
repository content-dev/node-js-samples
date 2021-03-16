-- USER SQL
CREATE USER "NODE_DEV" IDENTIFIED BY "SomePassword"  ;

-- QUOTAS
ALTER USER "NODE_DEV" QUOTA UNLIMITED ON "DATA";

-- ROLES

-- SYSTEM PRIVILEGES
GRANT CREATE TRIGGER TO "NODE_DEV" ;
GRANT CREATE MATERIALIZED VIEW TO "NODE_DEV" ;
GRANT CREATE VIEW TO "NODE_DEV" ;
GRANT CREATE SESSION TO "NODE_DEV" ;
GRANT CREATE TABLE TO "NODE_DEV" ;
GRANT CREATE TYPE TO "NODE_DEV" ;
GRANT CREATE PUBLIC DATABASE LINK TO "NODE_DEV" ;
GRANT QUERY REWRITE TO "NODE_DEV" ;
GRANT CREATE PUBLIC SYNONYM TO "NODE_DEV" ;
GRANT CREATE SYNONYM TO "NODE_DEV" ;
GRANT CREATE SEQUENCE TO "NODE_DEV" ;
GRANT CREATE CLUSTER TO "NODE_DEV" ;
GRANT PURGE DBA_RECYCLEBIN TO "NODE_DEV" ;