const products = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    price: 18500,
    category: 'Plantas de interior',
    img: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80',
    stock: 8,
    description: 'Planta de hojas grandes ideal para dar volumen y verde a cualquier ambiente.',
  },
  {
    id: 2,
    name: 'Sansevieria',
    price: 12400,
    category: 'Plantas de interior',
    img: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=800&q=80',
    stock: 12,
    description: 'Resistente y facil de cuidar, perfecta para hogares con poca luz natural.',
  },
  {
    id: 3,
    name: 'Cactus Mini',
    price: 6900,
    category: 'Cactus',
    img: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=800&q=80',
    stock: 15,
    description: 'Un cactus pequeno para escritorios o estantes, con mantenimiento simple.',
  },
  {
    id: 4,
    name: 'Maceta de ceramica',
    price: 9800,
    category: 'Macetas',
    img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    stock: 10,
    description: 'Maceta neutra y combinable, pensada para realzar plantas de interior.',
  },
  {
    id: 5,
    name: 'Pothus',
    price: 11300,
    category: 'Plantas colgantes',
    img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80',
    stock: 7,
    description: 'Planta colgante de crecimiento rapido, ideal para repisas y rincones luminosos.',
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}