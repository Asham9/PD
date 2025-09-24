import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/style.css';

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '487498117298-jaantmjgptpf6vombei50of1s7pj4rv7.apps.googleusercontent.com';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <App />
      <ToastContainer position="top-center" theme="light" />
    </GoogleOAuthProvider>
  </StrictMode>
);
