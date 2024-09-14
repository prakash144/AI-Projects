// pages/_app.js
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import '../styles/styles.css'; // Import global styles here

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
  );
}

export default MyApp;
