import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";



import CartItem from '../cartItem/cartItem';

import {selectCartItems} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect';





import CustomButton from '../customButton/customButton'

import './cartDropdown.scss'




const CartDropdoen=({cartItems, history})=>(
   <div className="cart-dropdown">
      <div className="cart-items">
        {
           cartItems.length ?

            cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem} />)
            :
            (<span className="empty-maessage">yourcart is empty</span>)

         } 
         </div>
         


         <CustomButton onClick={()=>history.push('/chackout')} >Go To Chackout</CustomButton>


      
   </div>
)

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems
   })

// export default connect(mapStateToProps)(CartDropdoen)
export default withRouter(connect(mapStateToProps)(CartDropdoen))
