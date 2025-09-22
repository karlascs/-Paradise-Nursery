// Función para formatear precios en pesos chilenos
export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

// Función alternativa más simple
export const formatPriceSimple = (price) => {
  return `$${price.toLocaleString('es-CL')} CLP`;
};