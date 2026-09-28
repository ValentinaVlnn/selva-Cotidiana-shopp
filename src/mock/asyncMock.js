export const categories = [
  { id: 'plantas-interior', label: 'Plantas de interior' },
  { id: 'cactus', label: 'Cactus' },
  { id: 'macetas', label: 'Macetas' },
]

const products = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    price: 990,
    categoryId: 'plantas-interior',
    category: 'Plantas de interior',
    img: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80',
    stock: 8,
    description: 'Planta de hojas grandes ideal para dar volumen y verde a cualquier ambiente.',
  },
  {
    id: 2,
    name: 'Sansevieria',
    price: 890,
    categoryId: 'plantas-interior',
    category: 'Plantas de interior',
    img: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=800&q=80',
    stock: 12,
    description: 'Resistente y facil de cuidar, perfecta para hogares con poca luz natural.',
  },
  {
    id: 3,
    name: 'Calathea Orbifolia',
    price: 950,
    categoryId: 'plantas-interior',
    category: 'Plantas de interior',
    img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
    stock: 6,
    description: 'Follaje decorativo con hojas anchas y vetas suaves para interiores luminosos.',
  },
  {
    id: 4,
    name: 'Ficus Elastica',
    price: 970,
    categoryId: 'plantas-interior',
    category: 'Plantas de interior',
    img: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80',
    stock: 7,
    description: 'Planta elegante y de facil mantenimiento, ideal para sumar verde a livings y oficinas.',
  },
  {
    id: 5,
    name: 'Cactus Mini',
    price: 590,
    categoryId: 'cactus',
    category: 'Cactus',
    img: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=800&q=80',
    stock: 15,
    description: 'Un cactus pequeno para escritorios o estantes, con mantenimiento simple.',
  },
  {
    id: 6,
    name: 'Cactus Barril',
    price: 890,
    categoryId: 'cactus',
    category: 'Cactus',
    img: 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?auto=format&fit=crop&w=800&q=80',
    stock: 9,
    description: 'Variedad compacta y resistente, pensada para espacios soleados y de bajo riego.',
  },
  {
    id: 7,
    name: 'Echeveria',
    price: 650,
    categoryId: 'cactus',
    category: 'Cactus',
    img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80',
    stock: 14,
    description: 'Suculenta de roseta prolija, excelente para regalos o rincones pequenos.',
  },
  {
    id: 8,
    name: 'Aloe Vera',
    price: 980,
    categoryId: 'cactus',
    category: 'Cactus',
    img: 'https://images.pexels.com/photos/7838200/pexels-photo-7838200.jpeg',
    stock: 11,
    description: 'Suculenta clasica, decorativa y muy elegida por su presencia simple y natural.',
  },
  {
    id: 9,
    name: 'Maceta de ceramica',
    price: 890,
    categoryId: 'macetas',
    category: 'Macetas',
    img: 'https://images.pexels.com/photos/35669377/pexels-photo-35669377.jpeg',
    stock: 10,
    description: 'Maceta neutra y combinable, pensada para realzar plantas de interior.',
  },
  {
    id: 10,
    name: 'Maceta de barro',
    price: 720,
    categoryId: 'macetas',
    category: 'Macetas',
    img: 'https://images.pexels.com/photos/36058908/pexels-photo-36058908.jpeg',
    stock: 13,
    description: 'Opcion clasica en barro cocido, ideal para un estilo calido y natural.',
  },
  {
    id: 11,
    name: 'Maceta blanca alta',
    price: 960,
    categoryId: 'macetas',
    category: 'Macetas',
    img: 'https://images.pexels.com/photos/10997656/pexels-photo-10997656.jpeg',
    stock: 8,
    description: 'Formato estilizado para plantas medianas, con una terminacion simple y moderna.',
  },
  {
    id: 12,
    name: 'Set x 2 macetas mini',
    price: 990,
    categoryId: 'macetas',
    category: 'Macetas',
    img: 'https://images.unsplash.com/photo-1463320898484-cdee8141c787?auto=format&fit=crop&w=800&q=80',
    stock: 5,
    description: 'Conjunto de macetas pequenas para suculentas, cactus o esquejes decorativos.',
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((item) => item.id === productId)

      if (product) {
        resolve(product)
      } else {
        reject(new Error('Producto no encontrado'))
      }
    }, 2000)
  })
}