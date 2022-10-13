import React from 'react'
import "./checkout.css"
import Subtital from './Subtital';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_ad' src='https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg'
    alt=''/>

<div>
            <h2 className='checkout_title'>
                Your Shopping Busket
            </h2>
        </div>
        </div>
        <div className='checkout_right'>
            <Subtital/>
        </div>
    
    </div>
  )
}

export default Checkout;