// Ensure window.fetch has both getter and setter across iframe environments
try {
  const originalFetch = typeof window !== 'undefined' && window.fetch ? window.fetch.bind(window) : undefined;
  let currentFetch = originalFetch;

  const fetchDescriptor: PropertyDescriptor = {
    get() {
      return currentFetch;
    },
    set(fn: typeof window.fetch) {
      currentFetch = fn;
    },
    configurable: true,
    enumerable: true,
  };

  try {
    Object.defineProperty(window, 'fetch', fetchDescriptor);
  } catch {
    // ignore
  }

  if (typeof Window !== 'undefined' && Window.prototype) {
    try {
      Object.defineProperty(Window.prototype, 'fetch', fetchDescriptor);
    } catch {
      // ignore
    }
  }
} catch {
  // ignore
}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
