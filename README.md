# 🌿 Paradise Nursery - Aplicación de Carrito de Compras

Una aplicación web moderna de carrito de compras para una tienda de plantas en línea, desarrollada con React, Redux Toolkit y React Router. Diseñada especialmente para el mercado chileno con precios en pesos chilenos.

## 🚀 Características Destacadas

- **Página de Inicio Animada**: Landing page atractiva con efectos visuales y animaciones CSS
- **Catálogo de Productos**: Organizados en dos categorías principales:
  - 🌿 **Plantas Aromáticas**: Albahaca ($8.500), Romero ($9.500), Menta ($7.500), Tomillo ($8.800), Orégano ($8.200)
  - 🌺 **Plantas Medicinales**: Lavanda ($12.500), Manzanilla ($11.200), Aloe Vera ($15.000), Caléndula ($9.800), Eucalipto ($16.500)
- **Carrito de Compras Interactivo**:
  - Agregar/quitar productos
  - Controles de cantidad (+/-)
  - Cálculo automático de totales en CLP
  - Contador dinámico en la barra de navegación
- **Navegación Responsiva**: Barra de navegación con indicador de cantidad de productos
- **Diseño Responsivo**: Optimizado para dispositivos móviles y desktop
- **Efectos Visuales**: Animaciones CSS, transiciones suaves y efectos hover
- **Formato de Moneda Chilena**: Precios formateados correctamente en pesos chilenos

## 🎨 Efectos Visuales y Animaciones

- **Animaciones de Entrada**: FadeIn y FadeInUp para contenido
- **Efectos Flotantes**: Imagen principal con animación float
- **Botones Animados**: Efecto pulse en call-to-action
- **Iconos Dinámicos**: Animación bounce con retrasos escalonados
- **Hover Effects**: Elevación de tarjetas al pasar el cursor
- **Transiciones Suaves**: Efectos de transición en todos los elementos interactivos

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario con hooks
- **Redux Toolkit** - Gestión de estado global
- **React Router DOM** - Navegación entre páginas
- **Vite** - Herramienta de construcción rápida
- **CSS3** - Estilos modernos, animaciones y efectos visuales
- **Intl.NumberFormat** - Formateo de moneda chilena
- **GitHub Pages** - Despliegue automático

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
[https://karlascs.github.io/Paradise-Nursery/](https://karlascs.github.io/Paradise-Nursery/)

## 📁 Estructura del Proyecto

```
paradise-nursery/
├── public/                    # Archivos estáticos
│   └── images/plants/        # Imágenes de productos
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── Header.jsx        # Barra de navegación con contador
│   │   ├── PlantCard.jsx     # Tarjeta de producto con precios CLP
│   │   └── CartItem.jsx      # Elemento del carrito
│   ├── pages/                # Páginas principales
│   │   ├── Home.jsx          # Página de inicio con animaciones
│   │   ├── Products.jsx      # Listado de productos por categoría
│   │   └── Cart.jsx          # Carrito de compras con totales CLP
│   ├── store/                # Configuración de Redux
│   │   ├── store.js          # Store principal
│   │   └── cartSlice.js      # Slice del carrito con lógica de estado
│   ├── data/                 # Datos de la aplicación
│   │   └── plantsData.js     # Catálogo con precios en CLP
│   ├── utils/                # Utilidades
│   │   └── formatters.js     # Formateo de moneda chilena
│   ├── styles/               # Archivos CSS con animaciones
│   └── App.jsx               # Componente principal con rutas
├── .github/workflows/        # GitHub Actions para despliegue
└── package.json
```

## 🎯 Funcionalidades Principales

### Gestión del Carrito
- **Agregar al carrito**: Desde las tarjetas de producto con precios en CLP
- **Modificar cantidad**: Botones +/- en el carrito
- **Eliminar productos**: Botón de eliminación individual
- **Vaciar carrito**: Limpiar todo el carrito
- **Cálculo automático**: Totales actualizados en tiempo real en pesos chilenos

### Navegación y UX
- **Inicio**: Página de bienvenida con animaciones y call-to-action
- **Productos**: Catálogo organizado por categorías con filtros
- **Carrito**: Gestión completa con resumen de pedido
- **Efectos Visuales**: Animaciones CSS fluidas y efectos hover
- **Responsive Design**: Adaptado para móviles y desktop

### Características Técnicas
- **Estado Global (Redux)**: Gestión centralizada del carrito
- **Formateo de Moneda**: Precios en formato chileno ($8.500 CLP)
- **Ruteo Dinámico**: Navegación SPA con React Router
- **Optimización de Imágenes**: Carga eficiente con Vite
- **Despliegue Automático**: CI/CD con GitHub Actions

## 💰 Sistema de Precios (CLP)

### Plantas Aromáticas
- **Albahaca**: $8.500 CLP
- **Romero**: $9.500 CLP  
- **Menta**: $7.500 CLP
- **Tomillo**: $8.800 CLP
- **Orégano**: $8.200 CLP

### Plantas Medicinales
- **Lavanda**: $12.500 CLP
- **Manzanilla**: $11.200 CLP
- **Aloe Vera**: $15.000 CLP
- **Caléndula**: $9.800 CLP
- **Eucalipto**: $16.500 CLP

*Todos los precios incluyen IVA y están actualizados al mercado chileno 2025*

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

- ✅ Componentes funcionales de React con hooks (useState, useEffect)
- ✅ Gestión de estado con Redux Toolkit y useSelector/useDispatch
- ✅ Navegación con React Router DOM (múltiples rutas)
- ✅ Renderización dinámica de datos desde arrays de objetos
- ✅ Manejo de eventos y renderización condicional
- ✅ Diseño responsivo con CSS Grid y Flexbox
- ✅ Despliegue en GitHub Pages con CI/CD
- ✅ Efectos visuales y animaciones CSS
- ✅ Formateo de datos (moneda chilena)
- ✅ Manejo de errores (imágenes fallback)

## 🚀 Actualizaciones Recientes

### v2.0.0 (Septiembre 2025)
- 🇨🇱 **Localización Chilena**: Precios convertidos a pesos chilenos
- 🎨 **Efectos Visuales**: Animaciones CSS avanzadas
- 📱 **UX Mejorada**: Transiciones suaves y efectos hover
- 🔧 **Utilidades**: Sistema de formateo de moneda
- 🏠 **Homepage Mejorada**: Animaciones de entrada y elementos flotantes

### v1.0.0 (Versión Base)
- 🌿 Catálogo de plantas funcional
- 🛒 Carrito de compras completo
- 📱 Diseño responsivo
- 🚀 Despliegue en GitHub Pages

---

**Desarrollado con ❤️ para el aprendizaje de React**  
**Especializado para el mercado chileno 🇨🇱**
