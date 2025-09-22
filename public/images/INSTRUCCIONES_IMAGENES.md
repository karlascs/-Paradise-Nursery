# Instrucciones para Agregar Imágenes de Productos

## Opción 1: Usar tus propias fotos (Recomendado)

1. **Agregar tus fotos:**
   - Coloca las imágenes de tus plantas en la carpeta: `public/images/plants/`
   - Formatos recomendados: JPG, PNG, WebP
   - Tamaño recomendado: 400x400px o mayor
   - Nombres sugeridos:
     ```
     albahaca.jpg
     romero.jpg
     menta.jpg
     tomillo.jpg
     oregano.jpg
     lavanda.jpg
     manzanilla.jpg
     aloe-vera.jpg
     calendula.jpg
     eucalipto.jpg
     ```

2. **Actualizar el código:**
   - Edita el archivo: `src/data/plantsData.js`
   - Cambia las URLs de `image` por rutas locales:
   ```javascript
   image: "/images/plants/albahaca.jpg"
   ```

## Opción 2: Usar mejores imágenes de stock

He actualizado las URLs para usar imágenes de mejor calidad (400x400px) de Unsplash.

## Opción 3: Banco de imágenes gratuitas

### Fuentes recomendadas:
- **Unsplash**: https://unsplash.com/s/photos/plants
- **Pexels**: https://pexels.com/search/herbs/
- **Pixabay**: https://pixabay.com/images/search/herbs/

### Búsquedas específicas:
- "basil plant pot" (albahaca)
- "rosemary herb" (romero)
- "mint plant" (menta)
- "thyme herb" (tomillo)
- "oregano plant" (orégano)
- "lavender plant" (lavanda)
- "chamomile flowers" (manzanilla)
- "aloe vera plant" (aloe vera)
- "calendula flowers" (caléndula)
- "eucalyptus plant" (eucalipto)

## Mejores prácticas:

1. **Tamaño consistente**: Todas las imágenes deben tener el mismo tamaño
2. **Calidad alta**: Mínimo 400x400px para evitar pixelación
3. **Formato optimizado**: WebP para mejor rendimiento, JPG como alternativa
4. **Nombres descriptivos**: Usa nombres claros para facilitar el mantenimiento

## ¿Quieres que te ayude a implementar alguna de estas opciones?