import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = createRoot(document.getElementById('root'));

//added auth0provider to render method in order to function properly
root.render(
    <Auth0Provider
        domain="dev-nrw5s5i7ybnd8su0.us.auth0.com"
        clientId="hgu4OuQg89HOGbVlSldsicL0Dg2kIWDx"
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: "https://dev-nrw5s5i7ybnd8su0.us.auth0.com/api/v2/",
          scope: "read:current_user update:current_user_metadata"
        }}
      >
        <App />
      </Auth0Provider>,
    );