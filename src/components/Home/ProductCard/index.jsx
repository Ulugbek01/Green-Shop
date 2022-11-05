import React from 'react'
import { Container } from './style'

const ProductCard = ({item}) => {
  return (
    <Container>
        <img src={item.img} alt="product img" width={250}/>
        <p>{item.title}</p>
        <span>{item.price}</span>
    </Container>
  )
}

export default ProductCard