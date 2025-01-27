# Guía Backend

Este documento describe los pasos necesarios para configurar y ejecutar el proyecto en un entorno local.

## Requisitos previos

1. **Node.js** (versión 18 o superior)
2. **npm** (version 10.8.2 o superior)
3. **Mysql** (configurado con usuario y contraseña)

> [!NOTE] > **MariaDB** es una alternativa compatible a MySQL. Fue probado en Manjaro Linux y funcionó sin problemas.

## Instalar dependencias

Ejecuta el siguiente comando en la raíz del proyecto para instalar todas las dependencias definidas en `package.json`

```
npm run install
```

## Variables de entorno

En el directorio Frontend crea un archivo `.env` con la siguiente configuración

```
# Puerto donde se ejecutará el backend
PORT = '4000'

# Configuraciones locales de mysql, modificarlo segun sus preferencias
DB_HOST='localhost'
DB_USER='root'
DB_PASS='password'
DB_NAME='mrcashDBtest'
```

> [!WARNING]
> Si modifica el nombre de la base de datos `DB_NAME`, también debe hacerlo en el `schema.sql`

## Ejecutar proyecto

1. Ejecutar el siguiente comando para inicializar la base de datos con la información del `schema.sql`

```
npm run init-db
```

2. Levantar el proyecto con el siguiente comando

```
npm run start
```

Por defecto tendrias la API REST en http://localhost:4000.

## Estructura principal

```
Backend/
├── schema.sql 		    # Definición del esquema de base de datos
│
└── src/                # Código fuente principal
    ├── index.ts        # Punto de entrada de la aplicación
    ├── controllers/    # Lógica de negocio y manejo de peticiones
    ├── db/             # Conexión y script de inicializacion de base de datos
    ├── interfaces/     # Interfaces de TypeScript
    ├── middleware/     # Interceptores de peticiones
    ├── models/         # Modelos de datos y lógica de negocio
    └── routes/         # Definición de endpoints y validaciones
	└── schemas/        # Esquemas de validación Zod
```
