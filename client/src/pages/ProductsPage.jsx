import React from 'react'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const ProductsPage = () => {
  return (
    <div>
      <Sidebar/>
      <Navbar/>
      <Products/>
    </div>
  )
}

export default ProductsPage