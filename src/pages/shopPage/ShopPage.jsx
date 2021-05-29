import React from 'react'
import {Route} from 'react-router-dom'

// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';



import CollectionOverview from '../../components/collectionOverview/collectionOverview'
// import SHOP_DATA from './shopData'
// import SHOP_DATA from '../../redux/shop/'

// import CollectionPreview from '../../components/previwCollection/CollectionPreview';
// import {selectCollections } from "../../redux/shop/shop.selectors";

import CollectionPage from '../collection/collection'

const ShopPage =({match})=>{
   console.log(match)
 
     return(
         <div className='shop-page'>
            {/* {
               collections.map(({id, ...otherprops})=>(
            <CollectionPreview  kye={id} {...otherprops} />

               ))
            } */}
            < Route exact path={`${match.path}` } component={ CollectionOverview }/>
            < Route  path={`${match.path}/:collectionId` } component={ CollectionPage}/>


         </div>)

}

// const mapStateToProps = createStructuredSelector({
//    collections: selectCollections,
//    }
// )


// class ShopPage extends React.Component{

//    constructor(props){
//       super(props)
   
//    this.state = {
//       collections: SHOP_DATA,
//       }
//    }

//    render(){
//       const {collections} = this.state
//       return(
//          <div className='shop-page'>
//             {
//                collections.map(({id, ...otherprops})=>(
//             <CollectionPreview  kye={id} {...otherprops} />

//                ))
//             }

//          </div>
//       )
//    }

// }




// export default connect(mapStateToProps)( ShopPage)
export default  ShopPage

