import React from 'react'
import New_DATA from './newData'
// import TablePreview from '../../components/previwCollection/TablePreview'




class TableData extends React.Component{

   constructor(props){
      super(props)
   
   this.state = {
      collections: New_DATA.values.graphics,
      }
   }
   

   render(){
      const {collections} = this.state
      return(
         <table className='shop-page'>
             <tr>
          <th>file name</th>
             <th>date</th>
            <th>about</th>
            <th>topic</th>
            <th>category</th>
            <th>labels</th>
             </tr>

            {
            //    collections.map(({iris, ...otherprops})=>(
            // <TablePreview  kye={iris} {...otherprops} />

            //    ))
            collections.map(x=>console.log(x))
            }

         </table>
      )
   }

}

export default TableData
