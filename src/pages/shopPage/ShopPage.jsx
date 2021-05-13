import React from 'react'
import SHOP_DATA from './shopData'
import CollectionPreview from '../../components/previwCollection/CollectionPreview'




class ShopPage extends React.Component{

   constructor(props){
      super(props)
   
   this.state = {
      collections: SHOP_DATA,
      }
   }

   render(){
      const {collections} = this.state
      return(
         <div className='shop-page'>
            {
               collections.map(({id, ...otherprops})=>(
            <CollectionPreview  kye={id} {...otherprops} />

               ))
            }

         </div>
      )
   }

}

export default ShopPage
