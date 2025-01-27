# Guía Frontend

Este documento describe los pasos necesarios para configurar y ejecutar el proyecto en un entorno local.

## Requisitos previos

1. **Node.js** (versión 18 o superior)
2. **npm** (version 10.8.2 o superior)

## Instalar dependencias

Ejecuta el siguiente comando en la raíz del proyecto para instalar todas las dependencias definidas en `package.json`

```
npm run install
```

## Variables de entorno

En el directorio Frontend crea un archivo `.env` con la siguiente configuración

```
VITE_BACKEND_API = 'http://localhost:4000/usuarios'
```

> [!WARNING]
> El prefijo `VITE_` es obligatorio para que vite exponga las variables

## Ejecutar proyecto

```
npm run dev
```

Abre tu navegador web y accede a la URL proporcionada en la terminal, generalmente http://localhost:5173.

## Estructura principal

```
src/
├── App.vue                 # Componente raíz de la aplicación
│
├── components/		    # Componentes
│   ├── ui	            # Componentes de diseño
│   ├── icons/              # Componentes de iconografía
│   ├── modals/             # Modales de la aplicación
│   └── users/	            # Componentes relacionados con usuarios
│
├── composables/            # Lógica reutilizable 
├── interfaces/             # Interfaces de TypeScript
├── services/               # Servicios api
└── stores/                 # Estados globales con Pinia
```
