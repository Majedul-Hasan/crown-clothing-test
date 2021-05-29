import React from 'react';
import ReactDOM from 'react-dom';


import { PersistGate } from 'redux-persist/integration/react'



import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import {store,  } from './redux/store'

import store, { persistor} from './redux/store'


import './index.css';
import App from './App';


ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
      <PersistGate  persistor={persistor}> 
      {/* null passed to loading, persistor is being used here */}
        
       
      <App />
      </PersistGate>
    
      </BrowserRouter>
    </Provider>

  // </React.StrictMode>
  ,
  document.getElementById('root')
);
