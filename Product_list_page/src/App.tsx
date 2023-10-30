import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Product from './components/Product'
//import SearchedProductList from './components/SearchedProductList'

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
    }, [])

  return (
    <>
      <div className="search">
        <form 
          className="search__form"
          {(e) => {
            e.preventDefault();
            console.log(inputValue);
            setSearchedProducts(
              products.filter((val) => val.name.toLowerCase().includes(inputValue.toLowerCase()))
            );
            setInputValue('')
          }}
        />
        <input 
        type='text' 
        placeholder='Search products'
        className="search__input"
        value={inputValue}
        onChange={(eventObj) => {
          setInputValue(eventObj.target.value)
        }}
        required
        />
        <div className="search__result">{
  
          searchedProducts.map(({id, name, price, category})=> {
            return (
              <Product 
              key={id}
              name={name}
              price={price}
              category={category}
            />
            )
          })
        }</div>
      </div>

      <div className='products'>
        {products.map(({id, name, price, category}) => {
          return (
            <Product 
              key={id}
              name={name}
              price={price}
              category={category}
            />
          )
        })}
      </div>
    </>
  )
}

export default App
