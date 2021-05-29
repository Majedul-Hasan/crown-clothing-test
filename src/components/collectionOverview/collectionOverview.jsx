import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../previwCollection/CollectionPreview'


// import {selectCollections } from "../../redux/shop/shop.selectors";
import {selectCollectioForPriview } from "../../redux/shop/shop.selectors";


import './collectionOverview.scss'


const  CollectionOverview =({collections})=>(
   <div className="collections-overview">
      {
         collections.map(({id,  ...otherCollectionProps})=>(
            <CollectionPreview key={id} {...otherCollectionProps} />
         ))
         
      }
   </div>
)

 const mapStateToProps = createStructuredSelector({
   // collections: selectCollections,
   collections: selectCollectioForPriview,

   }
)



export default connect(mapStateToProps)(CollectionOverview)