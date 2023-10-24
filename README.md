![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# **POKEMON** | Proyecto Individual

<img src="./pokemon.png" alt="" />

Objetivos 
----------------------------------------------
Crear una Aplicación Web de Pokemon utilizando una API externa (https://pokeapi.co/).
<br/>
Ésta tendrá funciones como: 
<br/>
<br/>
*Búsqueda de pokemons.*
<br/>
<br/>
*Filtrado por tipo de pokemon y fuente de la que provienen los pokemons (API o base de datos).*
<br/>
<br/>
*Ordenamiento ascendente y descendente de los pokemons por nombre o por estadística de ataque.*
<br/>
<br/>
*Posibilidad de crear nuestro propio pokemon.*
<br/>
<br/>
*Etc.*

Tecnologías
----------------------------------------------
Node.js <img src="https://assets.zabbix.com/img/brands/nodejs.svg" alt="Node.js logo" width=20px height=20px/>
<br/>
Javascript <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="Javascript logo" width=20px height=20px/>
<br/>
CSS <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS logo" width=20px height=20px/>
<br/>
React <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="React logo" width=20px height=20px/>
<br/>
Redux <img src="https://everyday.codes/wp-content/uploads/2020/01/0-U2DmhXYumRyXH6X1.png" alt="Redux logo" width=20px height=20px/>
<br/>
Express <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express logo" height=20px/>
<br/>
SQL <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL logo" height=20px/>
<br/>
Sequelize <img src="https://kvcvc.gallerycdn.vsassets.io/extensions/kvcvc/sequelize-snippets/1.0.0/1611441255791/Microsoft.VisualStudio.Services.Icons.Default" alt="Sequelize logo" width=20px height=23px/>

Requisitos para ejecutar de forma local
----------------------------------------------
1. Instalar PostgreSQL
2. Crear una base de datos con el nombre "pokemon"
3. Dentro de la carpeta /api crear un archivo con el formato .env y rellenarlo con sus credenciales utilizando el siguiente código:
```
DB_USER="usuariodepostgres"
DB_PASSWORD="passworddepostgres"
DB_HOST=localhost
```
`"usuariodepostgres"` y `"passworddepostgres"` deben ser reemplazados por tus propias credenciales.

Instalación para ejecutar de forma local
----------------------------------------------
Para que la aplicación funcione deberá instalar las dependencias necesarias utilizando el administrador de paquetes npm.
Para poder instalar las dependencias deberá estar posicionado dentro de ./api y dentro de ./client y ejecutar el siguiente comando:
```
npm install
```

Ejecutar la aplicación de forma local
----------------------------------------------
Una vez instaladas las dependencias deberá posicionarse nuevamente dentro de ./api y dentro de ./client y ejecutar el siguiente comando (en ambas carpetas):
```
npm start
```



