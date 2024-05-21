# NestJS

## OpenAPI Specification

1. Remote Schema

   https://{DOMAIN}/api-json (Swagger json)  
   https://{DOMAIN}/api (Swagger Documentation)

2. Generate locally
   ```bash
   yarn generate:openapi
   ```
   A json file will be generated in openapi/swagger.spec.json

## Naming convention

- All modules are in plural form.
- Except `src/migrations`, all file names should be in lowercase, and with `-` as the delimiter between words
- All entities should be in singular form and put under `entities` folders
- Due to the conventions in `TypeORM`, the file names in `src/migrations` will be `{TIME-STAMP}-{MigrationName}`, where `MigrationName` will be Pascal-case.
