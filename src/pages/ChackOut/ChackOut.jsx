import React from 'react';
import {connect} from 'react-redux'
import {  createStructuredSelector } from 'reselect';


import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector'

import ChackOutItems from "../ChackOutItems/ChackOutItems";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

import './ChackOut.scss'


const ChackOutPage= ({total, cartItems})=>(
   <div className="checkout-page">
      <div className="checkout-header">
         <div className="header-block">
            <span>product</span>
         </div>
      
         <div className="header-block">
            <span>Descrioption</span>
         </div>
      
         <div className="header-block">
            <span>Quanrity</span>
         </div>
      
         <div className="header-block">
            <span>Price</span>
         </div>
      
         <div className="header-block">
            <span>Remove</span>
         </div>
      </div>
      

      {
         cartItems.map(cartItem=>
            <ChackOutItems key={cartItem.id} cartItem={cartItem} />
         )
      }
      <div className="total">
        Total: ${total}

      </div>
      <div className="testwarning">
         *Please use the following test credit card for payment* 
         <br />
         4242 4242 4242 4242  -exp 01/22 - cvv 123


          

      </div>
      <StripeCheckoutButton price={total} />

      
            
   </div>
)


const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   total: selectCartTotal

})

export default connect(mapStateToProps)(ChackOutPage)