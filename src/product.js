import React from 'react'
import './product.css'
import star from './star.png'
import lean from './lean.png'

function Product({title,image,price,rating}){
    return(
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <img src={star} alt=''/>
                    ))}
                </div>
                </div>
                <img src={image} alt=''/>
                <button className='btn'>Add to busket</button>

              
            </div>
        
        // </div>
    )
}
export default Product;