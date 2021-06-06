import React, { useState, useEffect } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import Message from './Message'
import { useDispatch, useSelector } from 'react-redux'
import { getTopProductsAction } from '../actions/productAction'

const ProductCarousel = () => {
  const dispatch = useDispatch()
  const getTopProducts = useSelector((state) => state.getTopProducts)
  const {
    loading: loadingTop,
    error: errorTop,
    products: productsTop,
  } = getTopProducts

  useEffect(() => {
    dispatch(getTopProductsAction())
  }, [dispatch])
  return errorTop ? (
    <Message variant='danger'>{errorTop}</Message>
  ) : (
    <Carousel pause='hover' wrap={false} className='bg-dark'>
      {productsTop && productsTop.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid className='' />
            <Carousel.Caption className='carousel=caption'>
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel
