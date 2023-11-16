import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import debounce from 'lodash.debounce'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import Header from './components/Header'
import Message from './components/Message'
import ProductList from './components/ProductList'

type Product = {
  id: number,
  name: string,
  price: number,
  currency: string,
  category: string,
  description: string;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios.get('https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd')
    .then((res) =>{
      setProducts(res.data.products);
    })
    .catch((error: Error) => {
      setError(error);
    })
  }, []);

  useEffect(() => {
    setError(null)
  }, [products])

  if (error) {
    console.error('Error fetching data:', error);
  }

  const debouncedSearch = debounce(() => {
    const lowerCaseQuery = (inputRef.current?.value || '').toLowerCase();
    const filtered = products.filter(
      (product) => product.name.toLowerCase().includes(lowerCaseQuery) ||
      product.category.toLowerCase().includes(lowerCaseQuery)
    );
    setSearchedProducts(filtered);
  }, 700);

  return (
    <>
      <Header/>

      <div className='bg-image-url fixed top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center z-0'></div>

      <div className="flex justify-center justify-items-center p-6 lg:pt-11">
        <input 
          type='text' 
          placeholder='Search by name/category'
          className="border-2 border-red-950 rounded-md	p-1 z-10"
          onChange={debouncedSearch}
          ref={inputRef}
        />
      </div>
    
      <Router>
        <Routes>
          <Route path="/product/:id"
            element={
              <div className="flex justify-center gap-5 p-6 pb-6 lg:mt-4">
                <ProductDetail products={products}/>
              </div>
            }
          />

          <Route 
            path='/'
            element={
              <div className="flex justify-center flex-wrap gap-5 lg:p-6 pb-12 lg:mt-6">
                {searchedProducts.length > 0
                  ? <ProductList productList={searchedProducts}/>
                  : searchedProducts.length === 0 && (inputRef.current?.value.length ?? 0) > 0
                  ? <Message/>
                  : <ProductList productList={products}/>
                }
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
