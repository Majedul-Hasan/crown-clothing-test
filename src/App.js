import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage'
import { Route,  Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shopPage/ShopPage';


import {connect} from 'react-redux'; //higherorder component

import {setCurrentUser} from './redux/user/user.action'


import Header from './components/header/header';
import Signinandsignup from './pages/signinandsignup/signinandsignup'

import {auth, createUserProfileDocument } from './firebase/firebase';
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selector';
import ChackOutPage from './pages/ChackOut/ChackOut'




class App extends React.Component{

  // constructor(){
  //   super();
  //   this.state={
  //     currentUser:  null
  //   }

  // }

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser}=this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      // this.setState({ currentUser:  user})
      // createUserProfileDocument(user)

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot=>{
          // console.log(snapshot.data());
          // this.setState({
          //   currentUser :{
            // this.props.setCurrentUser({
              setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
        //   }, 
        //   ()=>{
        // console.log(this.state);


          // });
          // console.log(this.state);

        })
      } else{
        // this.setState({currentUser:userAuth})
        setCurrentUser(userAuth)
      }


      // console.log(user);

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }



// function App() {
  render(){
  return (
    <div>
      {/* <Header currentUser={this.state.currentUser} /> */}
      <Header />

      <Switch>

       


      <Route exact path='/' component={Homepage} />
      <Route   path='/shop' component={ShopPage} />
      {/* <Route   path='/signin' component={Signinandsignup} /> */}
       <Route exact   path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/' />):  (<Signinandsignup />)} />
      <Route exact  path='/chackout' component={ChackOutPage} />
      




     

      

      </Switch>

    </div>





    // <div className="App">
    //   <Homepage />
      
    // </div>
  );
}
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


const mapDispatchToProps= dispatch=>({
  setCurrentUser: user=> dispatch(setCurrentUser(user))


})



export default connect(mapStateToProps, mapDispatchToProps)(App);


// import React from 'react';
// import { Switch, Route } from 'react-router-dom';

// import './App.css';

// import HomePage from './pages/homepage/homepage';
// import ShopPage from './pages/shopPage/ShopPage';
// import SignInAndSignUpPage from './pages/signinandsignup/signinandsignup';
// import Header from './components/header/header';
// import { auth } from './firebase/firebase';

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       currentUser: null
//     };
//   }

//   unsubscribeFromAuth = null;

//   componentDidMount() {
//     this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
//       this.setState({ currentUser: user });

//       console.log(user);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//   render() {
//     return (
//       <div>
//         <Header currentUser={this.state.currentUser} />
//         <Switch>
//           <Route exact path='/' component={HomePage} />
//           <Route path='/shop' component={ShopPage} />
//           <Route path='/signin' component={SignInAndSignUpPage} />
//         </Switch>
//       </div>
//     );
//   }
// }

// export default App;