import { createSelector } from "reselect";


// const COLLECTION_ID_MAP={
//    hats:1,
//    sneakers: 2,
//    jackets:3,
//    womens: 4,
//    mens:5

// }


const selectShop = state => state.shop; //root reducer  shop: shopReducer    

export const selectCollections = createSelector(
 [selectShop],
 shop =>shop.collections
)


export const selectCollectioForPriview = createSelector(
   [selectCollections],
   collections=>Object.keys(collections).map(key=>collections[key])
)

export const selectCollection = (collectionsUrlParam)=> createSelector(
   [selectCollections],
   // collections=>collections.find(collection=>collection.id===COLLECTION_ID_MAP[collectionsUrlParam] )
   collections=>collections[collectionsUrlParam]
)