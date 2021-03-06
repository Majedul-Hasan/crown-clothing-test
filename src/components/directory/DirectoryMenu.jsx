import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { selectDirectorySections } from "../../redux/Directory/Directory.selector";


import MenuItem from '../../components/menu-items/MenuItem';
import './DirectoryMenu.scss'



// class Directory extends React.Component { 
   // constructor() {
   //    super();

   //    this.state ={
   //       sections: [
   //          {
   //             title: 'hats',
   //             imageUrl : 'https://i.ibb.co/cvpntL1/hats.png',
   //             id: 1,
   //             linkUrl: 'hats'
   //          },
   //          {
   //             title: 'jackets',
   //             imageUrl : 'https://i.ibb.co/px2tCc3/jackets.png',
   //             id: 2,
   //             linkUrl: ''
   //          },
   //          {
   //             title: 'sneakers',
   //             imageUrl : 'https://i.ibb.co/0jqHpnp/sneakers.png',
   //             id: 3,
   //             linkUrl: ''
   //          },
   //          {
   //             title: 'women\'s',
   //             imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
   //             size: 'large',
   //             id: 4,
   //             linkUrl: ''
   //          },
   //          {
   //             title: 'men\'s',
   //             imageUrl : 'https://i.ibb.co/R70vBrQ/men.png',
   //             size: 'large',
   //             id: 5,
   //             linkUrl: ''
   //          },
   //       ]
   //    }
   // }
   // render(){
   //    return(
const Directory =({sections})=>(
   
          <div className="directory-menu">
             {/* redux-state */}
             {
                sections.map(({id, ...otherSectionprops })=>(
                   < MenuItem kye = {id} {...otherSectionprops} />
                )
                )
            }



             {/* {
                this.state.sections.map(({title, imageUrl, id, size, linkUrl})=>(
                   < MenuItem title={title} kye = {id} imageUrl={imageUrl} size ={size } 
               linkUrl ={linkUrl} />
                )
                   

                )
            } */}
            {/* using rest operator */}
            {/* local state */}
            {/* {
                this.state.sections.map(({id, ...otherSectionprops })=>(
                   < MenuItem kye = {id} {...otherSectionprops} />
                )
                   

                )
            } */}

          </div>
      )
 


// const DirectoryMenu = () =>(
//       <div className="directory-menu">
//            < MenuItem title="hats" />
//          < MenuItem title="jackets" />
//          < MenuItem title="pants" />
//          < MenuItem title="Women's" />
//          < MenuItem title="man's" />
         
//       </div>
//    )


const mapStateToprops= createStructuredSelector({
   sections: selectDirectorySections
})

export default connect(mapStateToprops)(Directory)
