import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cartItem/cartItem';

import {selectCartItems} from '../../redux/cart/cart.selector'



import CustomButton from '../customButton/customButton'

import './cartDropdown.scss'




const CartDropdoen=({cartItems})=>(
   <div className="cart-dropdown">
      <div className="cart-items">
        {
            cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem} />)
         } 
         </div>
         


         <CustomButton>Go To Chackout</CustomButton>


      
   </div>
)

const mapStateToProps = (state)=> ({
   cartItems: selectCartItems(state)})

export default connect(mapStateToProps)(CartDropdoen)