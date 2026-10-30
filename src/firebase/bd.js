import { addDoc, collection, doc, getDoc, getDocs, query, serverTimestamp, where } from 'firebase/firestore'

import { db } from './config'

const formatCategoryId = (categoryName) => {
  return categoryName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\bde\b/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

// Tolera claves con espacios o ":" sobrantes cargadas a mano en Firestore (" name", "category:")
const normalizeProduct = (id, data) => {
  const product = {}

  Object.entries(data).forEach(([key, value]) => {
    product[key.trim().replace(/:$/, '')] = value
  })

  return { ...product, id }
}

export async function getProducts(categoryId) {
  const collectionRef = collection(db, 'products')
  const products = []

  try {
    const productsQuery = categoryId
      ? query(collectionRef, where('categoryId', '==', categoryId))
      : collectionRef

    const querySnapshot = await getDocs(productsQuery)

    querySnapshot.forEach((doc) => {
      products.push(normalizeProduct(doc.id, doc.data()))
    })

    return products
  } catch (error) {
    throw new Error('No se pudieron cargar los productos.', { cause: error })
  }
}

export async function getProductById(productId) {
  let productSnapshot

  try {
    productSnapshot = await getDoc(doc(db, 'products', productId))
  } catch (error) {
    throw new Error('No se pudo cargar el producto.', { cause: error })
  }

  if (!productSnapshot.exists()) {
    throw new Error('El producto que buscás no existe.')
  }

  return normalizeProduct(productSnapshot.id, productSnapshot.data())
}

export async function getCategories() {
  const collectionRef = collection(db, 'categories')
  const categories = []

  try {
    const querySnapshot = await getDocs(collectionRef)

    querySnapshot.forEach((doc) => {
      const categoryName = doc.data().categoryName

      categories.push({
        id: formatCategoryId(categoryName),
        label: categoryName,
      })
    })

    return categories
  } catch (error) {
    throw new Error('No se pudieron cargar las categorías.', { cause: error })
  }
}

export async function createOrder(orderData) {
  const docRef = await addDoc(collection(db, 'orders'), {
    ...orderData,
    createdAt: serverTimestamp(),
  })

  return docRef.id
}
