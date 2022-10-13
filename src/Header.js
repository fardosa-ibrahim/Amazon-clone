import React from 'react'
import './Header.css'
import pic from "./amazon.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
       <Link>
        <img className='header_logo'src={pic}/>
        </Link>
        <div className='header_search'>
            <input className='header_searchInput' type="text"/>
            <SearchIcon className='header_searchIcon'/> 
        </div>

        <div className='header_nav'>
            <div className='header_option'>
                <span className='header_optionOne'>Hello Guest</span>
                <span className='header_optionTwo'>Sign In</span>
            </div>
            <div className='header_option'>
                 <span className='header_optionOne'>Return</span>
                 <span className='header_optionTwo'>& orders</span>
            </div>
            <div className='header_option'>
                <span className='header_optionOne'>Your</span>
                <span className='header_optionTwo'>Prime</span>
            </div>
            <div className='header_option'>
                <span className='header_optionOne'>Hello Guest</span>
                <span className='header_optionTwo'>Sign In</span>
            </div>
        </div>
        <Link to='/checkout'>
        <div className='basket'>
            <ShoppingBasketIcon/>
            <span className='header_optionTwo basketTwo'>0</span>
        </div>
        </Link>
    </div>
    
  )
}

export default Header