import React from 'react'
import './Home.css'
import Product from './product'
import lean from './lean.png'


function Home(){
  return(
  <div className='home'>
    <div className='home_container'>
    <img className='home_image' 
      src='https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/Other/BRND_MTH21_SADLPDesktop_1453x363_Final_nolocale_PVD7436_Canada.jpg'
    alt=''/>
    <div className='home_row'>
      <Product 
      id="1"
      title="The Lean Startup is one of the core business books that revolutionised the business startup environment." 
      price={20.99} image={lean} rating={5}/>
      <Product  
      id="2"
      title=" Device for recording an image of an object on a light-sensitive surface; it is essentially a light-tight box with an aperture to admit light focused onto a sensitized film or plate." 
      price={50.99} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfEqAetPBzFoHUVeLu5zUkMGh4swXzVYNUA&usqp=CAU" rating={4}/>
    </div>
    <div className='home_row'>
    <Product  
    id="3"
    title="The lean startup" price={100.99} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtq2T88OkIoqginLsxjR5XaMFGrNy0JMDrpw&usqp=CAU" rating={4}/>
    <Product  
    id="4"
    title="The lean startup" price={80.99} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnF31nimlFtwvb5htMb1RDN10rIc9zpImNr6Rm0-0_FbG5GBMixAkotFJyVcCWTv8ttVU&usqp=CAU" rating={5}/>
    <Product  
    id="5"
    title="The lean startup" price={30.99} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUlD2imIn0U-ynAJKGWBCuSr7WQGuo_-HJEQ&usqp=CAU" rating={3}/>

    </div>
    <div className='home_row'>
    <Product  
    id="6"
    title="The lean startup" price={120.99} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLBxIz14YBqoKpzBI-jZtMbVtxGGhNzTfOUg&usqp=CAU" rating={5}/>

    </div>

    </div>
        
  </div>
        
      
 )
}
export default Home;