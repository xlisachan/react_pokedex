import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Case from './components/case/Case';

function App() {
  return (
    <Provider store={store}>
      <Case />
    </Provider>
  );
}

export default App;
