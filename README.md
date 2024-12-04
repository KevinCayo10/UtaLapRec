# Ecommerce con React.js

- Curso: ReactJS (2023)
- Comisión: 39655
- Profesor: Francisco Pugh
- Alumno: Matias Baldanza
- Fecha: 2023-05-16

## Deploy

Repo: https://github.com/matiasbaldanza/ecommerce-reactjs

![Gif mostrando la navegación](README/matiasbaldanza-ecommerce-reactjs-demo-nav.gif)

[Deploy en Vercel](https://ecommerce-reactjs-hazel.vercel.app)

<hr />

## Creado con

- [React.js](https://react.dev/)
- Estilos: [TailwindCSS 3.3.1](https://tailwindcss.com/docs/installation)
- Componentes UI: [DaisyUI](https://daisyui.com/docs/install/) (usados como base en componentes personalizados)
- Noficicaciones: [react-hot-toast](https://react-hot-toast.com/)
- Base de datos: [Firebase](https://firebase.google.com/)
- Build tool: [Vite](https://vitejs.dev/)
- Linter: [StandardJS (ESLint)](https://standardjs.com/)

## Pre-requerimientos

Luego de clonar el repositorio, instalar las dependencias

```bash
pnpm install
pnpm i firebase
```

<hr />

## Ejecutar la aplicación

Una vez instaladas las dependencias, ejecutar:

```bash
vite dev
```

La aplicación estará disponible en el [http://localhost:5173](http://localhost:5173) (o un puerto alternativo)

<hr />

## Rutas implementadas con react-router-dom

- /
- /category/:categoryId
- /:productId <br />

> _Nota: para los productos, no usé id numérico sino un 'slug' basado en el título de la publicación. Asumo que sería mejor usar un productId y reescribir la ruta con el slug, pero por ahora lo voy a dejar así_

Los cards de producto (Componente `<Item>`) tienen un estado de hover que muestra la segunda imagen disponible.

<hr />

## Páginas de producto (rutas /:productId)

Separado en Componentes:

- `<ProductImage />` para preview de producto

  _(muestra una imagen de varias. TODO: carrusel)_

- `<ProductInfo />` muestra la información de producto, tags,
- `<ProductImage />` muestra la imagen de producto \_(TODO: carrusel)

Los siguientes componentes tienen render condicional, dependiendo de si hay datos disponibles:

- `<ProductPreview />` muestra un banner de producto
- `<ProductDescription />` muestra un párrafo de descripción
- `<ProductSpecs />` muestra las especificaciones de producto

## Para solucionar problema de react-router en Vercel

Agregar en el `root` un archivo `vercel.json` con este contenido

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

Fuente: [https://github.com/vercel/vercel/issues/7475#issuecomment-1101659972](https://github.com/vercel/vercel/issues/7475#issuecomment-1101659972)
