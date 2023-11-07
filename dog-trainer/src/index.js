import React from 'react';
import {createRoot} from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = createRoot(document.getElementById('root'));

root.render(
    <Auth0Provider
        domain="dev-nrw5s5i7ybnd8su0.us.auth0.com"
        clientId="hgu4OuQg89HOGbVlSldsicL0Dg2kIWDx"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>,
    );