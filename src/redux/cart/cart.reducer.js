import cartActionTypes from './cart.types';
import {addItemToCart, removeItemFromCart} from './cartUtil';

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
      };
      case cartActionTypes.REMOVE_ITEM:
      return {
         ...state,
         // cartItems:[...state.cartItems, action.payload]
         cartItems: removeItemFromCart(state.cartItems, action.payload)
      }

      case cartActionTypes.CLEAR_ITEM_FOR_CART:
      return {
         ...state,
         cartItems: state.cartItems.filter(cartItem=> cartItem.id !== action.payload.id )

      }
   
   default: 
      return state
}
}

export default cartReducer;