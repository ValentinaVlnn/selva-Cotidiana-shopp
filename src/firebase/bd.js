import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, serverTimestamp, where } from "firebase/firestore";
import { app } from './config'

const db = getFirestore(app)

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

export async function getProducts(categoryId) {
  const collectionRef = collection(db, 'products')
  const products = []

  try {
    const productsQuery = categoryId
      ? query(collectionRef, where('categoryId', '==', categoryId))
      : collectionRef

    const querySnapshot = await getDocs(productsQuery)

    querySnapshot.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id })
    })

    return products
  } catch (error) {
    console.error('Error al obtener la coleccion:', error)
    return []
  }
}

export async function getProductById(productId) {
  const productRef = doc(db, 'products', productId)

  try {
    const productSnapshot = await getDoc(productRef)

    if (!productSnapshot.exists()) {
      throw new Error('Producto no encontrado')
    }

    return {
      id: productSnapshot.id,
      ...productSnapshot.data(),
    }
  } catch (error) {
    console.error('Error al obtener el producto:', error)
    throw error
  }
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
    console.error('Error al obtener las categorias:', error)
    return categories
  }
}

export async function createOrder(orderData) {
  try {
    const docRef = await addDoc(collection(db, 'orders'), {
      ...orderData,
      createdAt: serverTimestamp(),
    })

    return docRef.id
  } catch (error) {
    console.error('Error al crear la orden:', error)
    throw error
  }
}