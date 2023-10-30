import { useState, useEffect } from 'react'
import axios from 'axios'
import debounce from 'lodash.debounce'
import Product from './components/Product'
import ProductDetails from './components/ProductDetails'
import './App.css'

type Product = {
  id: number,
  name: string,
  price: number,
  category: string
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
      <div className="search">
        <input 
        type='text' 
        placeholder='Search by name/category'
        className="search__input"
        value={inputValue}
        onChange={handleInputChange}
        required
        />
      </div>

      <div className="products">
        {searchedProducts.length > 0 
          ? searchedProducts.map(({ id, name, price, category }) => (
              <Product
                key={id}
                name={name}
                price={price}
                category={category}
              />
            ))
          : products.map(({ id, name, price, category }) => (
              <Product
                key={id}
                name={name}
                price={price}
                category={category}
              />
            ))
        }
      </div>
    </>
  )
}

export default App
