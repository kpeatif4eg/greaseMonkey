import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import  Router  from './routes/RouterContainer';
import { createStore, applyMiddleware, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './store'
import './App.css';

const store = createStore(
  reducer, composeWithDevTools( applyMiddleware(thunk))
)

function App() {

  return (
      <Provider store={store} >
          <BrowserRouter>
              <Router />
          </BrowserRouter>
      </Provider>
  );
}

export default App;
