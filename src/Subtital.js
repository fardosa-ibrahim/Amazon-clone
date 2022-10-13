import React from 'react'
import "./Subtital.css"
import CurrencyFormat from "react-currency-format"
function Subtital() {
  return (
    <div className='subtotal'>
        <CurrencyFormat 
        renderText={(value)=>(
            <>
            <p>
                Subtotal(0 items):
                <strong>0</strong>
            </p>
            <small className='subtotal_gift'>
                <input type="checkbox"/>
                This Order Contains a Gift
            </small>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}

        
        />
        <button>Proceed Checkout</button>

    </div>
  )
}

export default Subtital