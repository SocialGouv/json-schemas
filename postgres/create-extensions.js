// generate JSON schema from pg_extensions

// result from select * from pg_available_extensions;

const rows = `
 dict_int                       | 1.0             |                   | text search dictionary template for integers
 file_fdw                       | 1.0             |                   | foreign-data wrapper for flat file access
 dblink                         | 1.2             |                   | connect to other PostgreSQL databases from within a database
 uuid-ossp                      | 1.1             |                   | generate universally unique identifiers (UUIDs)
 adminpack                      | 2.1             |                   | administrative functions for PostgreSQL
 pgcrypto                       | 1.3             |                   | cryptographic functions
 lo                             | 1.1             |                   | Large Object maintenance
 citext                         | 1.6             |                   | data type for case-insensitive character strings
 hstore                         | 1.8             |                   | data type for storing sets of (key, value) pairs
 sslinfo                        | 1.2             |                   | information about SSL certificates
 insert_username                | 1.0             |                   | functions for tracking who changed a table
 seg                            | 1.4             |                   | data type for representing line segments or floating-point intervals
 postgres_fdw                   | 1.1             |                   | foreign-data wrapper for remote PostgreSQL servers
 pg_stat_statements             | 1.9             |                   | track planning and execution statistics of all SQL statements executed
 intarray                       | 1.5             |                   | functions, operators, and index support for 1-D arrays of integers
 pageinspect                    | 1.9             |                   | inspect the contents of database pages at a low level
 pg_trgm                        | 1.6             |                   | text similarity measurement and index searching based on trigrams
 cube                           | 1.5             |                   | data type for multidimensional cubes
 amcheck                        | 1.3             |                   | functions for verifying relation integrity
 tsm_system_rows                | 1.0             |                   | TABLESAMPLE method which accepts number of rows as a limit
 fuzzystrmatch                  | 1.1             |                   | determine similarities and distance between strings
 pg_freespacemap                | 1.2             |                   | examine the free space map (FSM)
 pg_surgery                     | 1.0             |                   | extension to perform surgery on a damaged relation
 pgrowlocks                     | 1.2             |                   | show row-level locking information
 ltree                          | 1.2             |                   | data type for hierarchical tree-like structures
 earthdistance                  | 1.1             |                   | calculate great-circle distances on the surface of the Earth
 old_snapshot                   | 1.0             |                   | utilities in support of old_snapshot_threshold
 unaccent                       | 1.1             |                   | text search dictionary that removes accents
 autoinc                        | 1.0             |                   | functions for autoincrementing fields
 pg_buffercache                 | 1.3             |                   | examine the shared buffer cache
 pgstattuple                    | 1.5             |                   | show tuple-level statistics
 plpgsql                        | 1.0             | 1.0               | PL/pgSQL procedural language
 isn                            | 1.2             |                   | data types for international product numbering standards
 dict_xsyn                      | 1.0             |                   | text search dictionary template for extended synonym processing
 refint                         | 1.0             |                   | functions for implementing referential integrity (obsolete)
 tsm_system_time                | 1.0             |                   | TABLESAMPLE method which accepts time in milliseconds as a limit
 pg_prewarm                     | 1.2             |                   | prewarm relation data
 intagg                         | 1.1             |                   | integer aggregator and enumerator (obsolete)
 btree_gin                      | 1.3             |                   | support for indexing common datatypes in GIN
 tcn                            | 1.0             |                   | Triggered change notifications
 tablefunc                      | 1.0             |                   | functions that manipulate whole tables, including crosstab
 pg_visibility                  | 1.2             |                   | examine the visibility map (VM) and page-level visibility info
 btree_gist                     | 1.6             |                   | support for indexing common datatypes in GiST
 moddatetime                    | 1.0             |                   | functions for tracking last modification time
 bloom                          | 1.0             |                   | bloom access method - signature file based index
 xml2                           | 1.1             |                   | XPath querying and XSLT
 pgaudit                        | 1.6.2           |                   | provides auditing functionality
 pgrouting                      | 3.5.0           |                   | pgRouting Extension
 postgis-3                      | 3.4.0           |                   | PostGIS geometry and geography spatial types and functions
 postgis_sfcgal                 | 3.4.0           |                   | PostGIS SFCGAL functions
 address_standardizer_data_us   | 3.4.0           |                   | Address Standardizer US dataset example
 postgis_topology               | 3.4.0           |                   | PostGIS topology spatial types and functions
 postgis_topology-3             | 3.4.0           |                   | PostGIS topology spatial types and functions
 address_standardizer-3         | 3.4.0           |                   | Used to parse an address into constituent elements. Generally used to support geocoding address normalization step.
 postgis_raster-3               | 3.4.0           |                   | PostGIS raster types and functions
 postgis_raster                 | 3.4.0           |                   | PostGIS raster types and functions
 postgis                        | 3.4.0           |                   | PostGIS geometry and geography spatial types and functions
 address_standardizer           | 3.4.0           |                   | Used to parse an address into constituent elements. Generally used to support geocoding address normalization step.
 address_standardizer_data_us-3 | 3.4.0           |                   | Address Standardizer US dataset example
 postgis_tiger_geocoder         | 3.4.0           |                   | PostGIS tiger geocoder and reverse geocoder
 postgis_sfcgal-3               | 3.4.0           |                   | PostGIS SFCGAL functions
 postgis_tiger_geocoder-3       | 3.4.0           |                   | PostGIS tiger geocoder and reverse geocoder
 `
  .trim()
  .split("\n")
  .map((row) => row.split("|").map((c) => c.trim()));

const schema = {
  type: "array",
  $schema: "http://json-schema.org/draft-07/schema",
  $id: "https://raw.githubusercontent.com/SocialGouv/json-schemas/main/postgres/extensions.json",
  title:
    "List of Postgres regular extensions. see https://www.postgresql.org/docs/current/contrib.html",
  items: {
    enum: rows.map((row) => row[0]),
  },
};

console.log(JSON.stringify(schema, null, 2));
