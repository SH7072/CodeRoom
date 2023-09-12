import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <MantineProvider theme={{ colorScheme: 'dark' }}> */}
    <App />
    {/* </MantineProvider> */}
  </Provider>
  // </React.StrictMode>
);


