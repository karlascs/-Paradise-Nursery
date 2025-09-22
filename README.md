# 🌿 Paradise Nursery - Aplicación de Carrito de Compras

Una aplicación web moderna de carrito de compras para una tienda de plantas en línea, desarrollada con React, Redux Toolkit y React Router.

## 🚀 Características

- **Página de Inicio**: Landing page atractiva con navegación hacia los productos
- **Catálogo de Productos**: Organizados en dos categorías principales:
  - 🌿 **Plantas Aromáticas**: Albahaca, Romero, Menta, Tomillo, Orégano
  - 🌺 **Plantas Medicinales**: Lavanda, Manzanilla, Aloe Vera, Caléndula, Eucalipto
- **Carrito de Compras Interactivo**:
  - Agregar/quitar productos
  - Controles de cantidad (+/-)
  - Cálculo automático de totales
  - Contador dinámico en la barra de navegación
- **Navegación Responsiva**: Barra de navegación con indicador de cantidad de productos
- **Diseño Responsivo**: Optimizado para dispositivos móviles y desktop

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **Redux Toolkit** - Gestión de estado global
- **React Router DOM** - Navegación entre páginas
- **Vite** - Herramienta de construcción rápida
- **CSS3** - Estilos modernos y responsivos

## 📦 Instalación y Uso

### Prerrequisitos
- Node.js (versión 20.19+ o 22.12+)
- npm

### Instalación
```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Navegar al directorio
cd paradise-nursery

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

### Comandos Disponibles
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run preview` - Vista previa de la construcción
- `npm run lint` - Ejecutar ESLint

## 🌐 Despliegue

La aplicación está configurada para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

### URL de Producción
[https://[tu-usuario].github.io/paradise-nursery/](https://[tu-usuario].github.io/paradise-nursery/)

## 📁 Estructura del Proyecto

```
paradise-nursery/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Header.jsx     # Barra de navegación
│   │   ├── PlantCard.jsx  # Tarjeta de producto
│   │   └── CartItem.jsx   # Elemento del carrito
│   ├── pages/             # Páginas principales
│   │   ├── Home.jsx       # Página de inicio
│   │   ├── Products.jsx   # Listado de productos
│   │   └── Cart.jsx       # Carrito de compras
│   ├── store/             # Configuración de Redux
│   │   ├── store.js       # Store principal
│   │   └── cartSlice.js   # Slice del carrito
│   ├── data/              # Datos de la aplicación
│   │   └── plantsData.js  # Catálogo de plantas
│   └── App.jsx            # Componente principal
├── .github/workflows/     # GitHub Actions
└── package.json
```

## 🎯 Funcionalidades Principales

### Gestión del Carrito
- **Agregar al carrito**: Desde las tarjetas de producto
- **Modificar cantidad**: Botones +/- en el carrito
- **Eliminar productos**: Botón de eliminación individual
- **Vaciar carrito**: Limpiar todo el carrito
- **Cálculo automático**: Totales actualizados en tiempo real

### Navegación
- **Inicio**: Página de bienvenida con call-to-action
- **Productos**: Catálogo organizado por categorías
- **Carrito**: Gestión completa del carrito de compras

### Estado Global (Redux)
- Cantidad total de productos
- Lista de productos en el carrito
- Cálculo automático de precios totales

## 👥 Contribución

1. Fork el proyecto
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🎓 Contexto Académico

Este proyecto fue desarrollado como parte del proyecto final del curso de React en Cognitive Class, cumpliendo con todos los requisitos establecidos:

- ✅ Componentes funcionales de React con hooks
- ✅ Gestión de estado con Redux Toolkit
- ✅ Navegación con React Router
- ✅ Renderización dinámica de datos
- ✅ Manejo de eventos y renderización condicional
- ✅ Diseño responsivo
- ✅ Despliegue en GitHub Pages

---

**Desarrollado con ❤️ para el aprendizaje de React**
