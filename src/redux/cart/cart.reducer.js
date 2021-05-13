import cartActionTypes from './cart.types';
import {addItemToCart} from './cartUtil';

const INNITIAL_STATE = {
   hidden: true,
   cartItems: []
}


const cartReducer = (state=INNITIAL_STATE, action )=>{
   switch (action.type){
      case cartActionTypes.TOGGLE_CART_HIDDEN :
         return {
            ...state,
            hidden: !state.hidden};
      case cartActionTypes.ADD_ITEM:
      return {
         ...state,
         // cartItems:[...state.cartItems, action.payload]
         cartItems: addItemToCart(state.cartItems, action.payload)
      }
   
   default: 
      return state
}
}

export default cartReducer;