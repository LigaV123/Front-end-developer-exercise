import { useState, useEffect } from 'react'
import axios from 'axios'
import debounce from 'lodash.debounce'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import Header from './components/Header'

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
  const [inputValue, setInputValue] = useState('');
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);

    useEffect(() => {
      axios.get('https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd').then((res) =>{
      setProducts(res.data.products);
      })
    }, []);

    const debouncedSearch = debounce((query: string) => {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = products.filter(
        (product) => product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.category.toLowerCase().includes(lowerCaseQuery)
      );
      setSearchedProducts(filtered);
    }, 1000);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      setInputValue(query);
      debouncedSearch(query);
    };

  return (
    <>
      <Header/>

      <div className="flex justify-center justify-items-center p-6">
        <input 
          type='text' 
          placeholder='Search by name/category'
          className="border-2 border-red-950 rounded-md	p-1"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    
      <Router>
        <Routes>
          <Route path="/product/:id"
            element={
              <div className="flex justify-center gap-3 p-6">
                <ProductDetail products={products}/>
              </div>
            }
          />

          <Route 
            path='/'
            element={
              <div className="flex justify-center flex-wrap gap-3 p-6">
                {searchedProducts.length > 0
                  ? searchedProducts.map(({ id, name, price, currency, category }) => (
                      <Link to={`/product/${id}`} key={id}>
                        <Product name={name} price={price} currency={currency} category={category} />
                      </Link>
                    ))
                  : products.map(({ id, name, price, currency, category }) => (
                      <Link to={`/product/${id}`} key={id}>
                        <Product name={name} price={price} currency={currency} category={category} />
                      </Link>
                    ))
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
