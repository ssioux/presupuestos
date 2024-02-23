<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>





# PRESUPUESTOS T.S. - 1.0

1. Clone
2. ``` npm install ```
3. Clonar archivo ``` .env.template``` y renombrarlo a  ``` .env ```
4. Cambiar variables de entorno
5. levantar base de datos

``` 
docker-compose up -d
```
6. correr servidor: ``` npm run start:dev ```

7. Generar migración:
``` 
npm run migration:generate ./db/migrations/<migration-name>
```
8. Correr migración:
``` 
npm run migration:run
```
9. Insertar Data inicial desde JSON.file
http://localhost:3000/api/seed

__________________________________

### Documentación (swagger): ``` http://localhost:3000/docs  ```