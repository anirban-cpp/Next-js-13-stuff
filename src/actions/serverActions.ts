"use server"    // this directive allows this function to be used as a server action

import { revalidateTag } from "next/cache"
import { Product } from "../../typings"

export const addProductToDB = async (e: FormData) => {
    const product = e.get('product')?.toString()
    const price = e.get('price')?.toString()
  
    if (!product || !price) return
  
    const newProduct: Product = {
      product,
      price
    }
    try {
      await fetch('https://64f1192c0e1e60602d239a56.mockapi.io/products', {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  
      revalidateTag('products') // this allows the endpoint with this tag to be re-fetched
    } catch (err) {
  
    } finally {
      e.set("product",'')
      e.set("price",'')
    }
  }