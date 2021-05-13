import firebase from 'firebase/app';
import 'firebase/firestore'; // for database
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCyauX6WAODVA67327uyrNT8HnNSII0KJg",
  authDomain: "crown-clothing-8c233.firebaseapp.com",
  projectId: "crown-clothing-8c233",
  storageBucket: "crown-clothing-8c233.appspot.com",
  messagingSenderId: "169216582895",
  appId: "1:169216582895:web:2616bedcf770afd42b271a"
};

firebase.initializeApp(config);

const auth = firebase.auth();

const firestore =  firebase.firestore();

//google authentication 

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'})

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


const signInWithGoogle =()=> auth.signInWithPopup(provider);

const createUserProfileDocument= async (userAuth, additionalData)=>{
  if(!userAuth) return; 
  // console.log(firestore.doc('user/151541wregvf'));
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  console.log(userRef);


  const snapShot = await userRef.get()

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const craetedAt =new Date();

    try {
      await userRef.set({
        displayName,
        email,
        craetedAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
      
    }

  }

  return userRef
   





}
  

export default  firebase;

export {signInWithGoogle, provider, auth, firestore, createUserProfileDocument }
