import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';


const Products = () => {
  const [product, setProduct] = useState([]);
 


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const response = await data.json();
        setProduct(response)
      } catch (error) {
        console.log(error.message)


      }
    }
    fetchProduct();
  }, [])
  return (
    <div className='mt-12'>
      <h3>Product</h3>
      
      {
        product.map((p, index) => {
          console.log(p);
          <ProductCard key={index} product={p} />
        })
      }
    </div>
  )
}

export default Products