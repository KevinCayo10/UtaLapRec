// Incluye constantes globales de la aplicación, rutas de archivos, etc.

// Imágenes de productos
export const PUBLIC_IMG_PATH = {
  productImages: '/product-images',
  featureIcons: '/feature-icons',
  images: '/images'
}

export const LOAD_CART_MOCK = false

export const cartSteps = [
  { path: '/cart', label: 'Carrito' },
  { path: '/checkout', label: 'Detalles del pago' },
  { path: '/success', label: 'Pedido completado' }
]

export const SOCIAL_ACCOUNTS = [
  {
    name: 'Instagram',
    url: '#',
    icon: 'IconInstagram'
  },
  {
    name: 'WhatsApp',
    url: '#',
    icon: 'IconWhatsapp'
  }
]

// Rutas de la API - Menú de Categorías
export const CATEGORIES = [
  {
    title: 'Notebooks',
    route: 'notebooks'
  },
  {
    title: 'Notebooks Gamer',
    route: 'gamer'
  },
  {
    title: 'Gadgets',
    route: 'gadgets'
  }
]

export const ANNOUNCEMENT = {
  active: false,
  showReportErrorButton: true,
  title: '⚠️ Esta no es una tienda real. Es un ejercicio de programación! ⚠️',
  style: {
    error: 'bg-error',
    info: 'bg-info',
    warning: 'bg-warning',
    success: 'bg-success',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    ghost: 'bg-ghost'
  }
}
