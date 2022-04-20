import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Dog from './Dog';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App-header">
        <Dog />
      </div>
    </Provider>

  );
}

export default App;
