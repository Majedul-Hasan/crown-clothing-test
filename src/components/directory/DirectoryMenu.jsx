import React from 'react'
import MenuItem from '../../components/menu-items/MenuItem';
import './DirectoryMenu.scss'



class Directory extends React.Component { 
   constructor() {
      super();

      this.state ={
         sections: [
            {
               title: 'hats',
               imageUrl : 'https://i.ibb.co/cvpntL1/hats.png',
               id: 1,
               linkUrl: 'hats'
            },
            {
               title: 'jackets',
               imageUrl : 'https://i.ibb.co/px2tCc3/jackets.png',
               id: 2,
               linkUrl: ''
            },
            {
               title: 'sneakers',
               imageUrl : 'https://i.ibb.co/0jqHpnp/sneakers.png',
               id: 3,
               linkUrl: ''
            },
            {
               title: 'women\'s',
               imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
               size: 'large',
               id: 4,
               linkUrl: ''
            },
            {
               title: 'men\'s',
               imageUrl : 'https://i.ibb.co/R70vBrQ/men.png',
               size: 'large',
               id: 5,
               linkUrl: ''
            },
         ]
      }
   }

   render(){
      return(
          <div className="directory-menu">
             {/* {
                this.state.sections.map(({title, imageUrl, id, size, linkUrl})=>(
                   < MenuItem title={title} kye = {id} imageUrl={imageUrl} size ={size } 
               linkUrl ={linkUrl} />
                )
                   

                )
            } */}
            {/* using rest operator */}
            {
                this.state.sections.map(({id, ...otherSectionprops })=>(
                   < MenuItem kye = {id} {...otherSectionprops} />
                )
                   

                )
            }




          </div>
      )
   }



}


// const DirectoryMenu = () =>(
//       <div className="directory-menu">
//            < MenuItem title="hats" />
//          < MenuItem title="jackets" />
//          < MenuItem title="pants" />
//          < MenuItem title="Women's" />
//          < MenuItem title="man's" />
         
//       </div>
//    )

export default Directory
