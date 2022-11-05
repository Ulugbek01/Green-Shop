import React, { useEffect, useState } from 'react'
import { Categories, Container, Filtered, Hero, Price, ProductItems, Products, Size } from './style'
import hero from '../../assets/imgs/hero.png';
import Button from '../Ceneric/Button';
import ProductCard from './ProductCard';
import { categories } from '../../utils/categories';

const {REACT_APP_BASE_URL: url} = process.env;

const Home = () => {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${url}/product`)
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, [])

  console.log(products);

  return (
    <Container>
        <Hero>
            <div className='hero-content'>  
                <h3 className='hero-intro'>Welcome to GreenShop</h3>
                <h1 className='hero-title'>Let’s Make A Better <span className='green'>Planet</span></h1>
                <p className='hero-desc'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                <Button px={26} py={10} mt={44} className={'to-uppercase'}>Shop now</Button>
            </div>

            <div className='hero-img'>
                <img src={hero} alt="hero-img" width={518}/>
            </div>
        </Hero>

        <Products>
          <Filtered>
            <Categories>
              <h3 className='title'>Categories</h3>
              <ul>
                {categories.map((category) => 
                  <li active={category === category.type} onClick={() => setCategory(category.type)} className='category-item' key={category.id}>{category.title}</li>
                )}
              </ul>
            </Categories>

            <Price>
              <h3 className='title'>Price Range</h3>
              <div style={{paddingLeft: '12px'}}>
                <input type="range" />
                <p className='price-interval'><span className='price'>Price:</span> $39 - $1230</p>
                <Button mt={16} px={26} py={8}>Filter</Button>
              </div>
            </Price>

            <Size>
              <h3 className='title'>Size</h3>
              <ul>
                <li>Small</li>
                <li>Medium</li>
                <li>Large</li>
              </ul>
            </Size>      
          </Filtered>

          <ProductItems>
            {category !== '' ? 
              products.filter((item) => item.type.toLowerCase() === category.toLowerCase()).map((product) => 
                <ProductCard item={product} key={product._id}/>
              )
            :
            products.map((product) => 
              <ProductCard item={product} key={product._id}/>
            )  
            }
          </ProductItems>          
        </Products>
    </Container>
  )
}

export default Home