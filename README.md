# json-schemas

Some JSON-schemas for linting and validation


## Postgres

Description               | Url
--------------------------|----------------------------
PostgreSQL extensions     | [![JSON schema](https://img.shields.io/badge/JSON-schema-8A2BE2)](https://raw.githubusercontent.com/SocialGouv/json-schemas/main/postgres/extensions.json)
PostgreSQL parameters     | [![JSON schema](https://img.shields.io/badge/JSON-schema-8A2BE2)](https://raw.githubusercontent.com/SocialGouv/json-schemas/main/postgres/parameters.json)
Nginx ingress annotations | [![JSON schema](https://img.shields.io/badge/JSON-schema-8A2BE2)](https://raw.githubusercontent.com/SocialGouv/json-schemas/main/nginx/annotations.schema.json)

Notes:
- All params are strings for [CNPG](https://cloudnative-pg.io) compatibility
- Request to generate parameters are run on PG14
- With these extentions loaded:

```
PG14 et pg_prewarm
pg_surgery
seg
pg_stat_statements
intagg
hstore
dict_xsyn
tsm_system_rows
earthdistance
tsm_system_time
unaccent
file_fdw
pg_trgm
postgres_fdw
pgrowlocks
tablefunc
adminpack
pg_visibility
dblink
old_snapshot
lo
xml2
ltree
isn
insert_username
pageinspect
citext
bloom
uuid-ossp
btree_gist
amcheck
pgstattuple
dict_int
refint
moddatetime
btree_gin
tcn
autoinc
intarray
plpgsql
fuzzystrmatch
pg_buffercache
cube
sslinfo
pgcrypto
pg_freespacemap
pgaudit
pgrouting
postgis-3
postgis_raster-3
postgis_tiger_geocoder-3
postgis_raster
address_standardizer
postgis
postgis_topology
address_standardizer_data_us-3
postgis_topology-3
postgis_sfcgal-3
postgis_sfcgal
address_standardizer-3
postgis_tiger_geocoder
address_standardizer_data_us
```