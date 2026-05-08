import { Elements } from '@stripe/react-stripe-js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import stripePromise from './config/stripeConfig';
import AppProvider from './hooks';
import { Router } from './routes';
import GlobalStyles from './styles/globalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Elements>
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme="colored" />
    </AppProvider>
  </StrictMode>,
);
