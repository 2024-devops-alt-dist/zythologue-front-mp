import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// Add Bootstrap CSS dynamically
const bootstrapCSS = document.createElement('link');
bootstrapCSS.rel = 'stylesheet';
bootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css';
bootstrapCSS.integrity = 'sha384-w76A6UD8Js4aWy8jJ1qoWujQ2R43qv1zLFpCZI6MtzmW3z8z4s3X6tG1sA75jJKh';
bootstrapCSS.crossOrigin = 'anonymous';
document.head.appendChild(bootstrapCSS);

// Add Bootstrap JavaScript dynamically
const bootstrapJS = document.createElement('script');
bootstrapJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js';
bootstrapJS.integrity = 'sha384-HoA7DNk/9Gc4flqJ9Aw9Uc8qzcExlHUg1yJO09Hu1OF1UuALRXdPp2b9YfZuZoK5';
bootstrapJS.crossOrigin = 'anonymous';
document.body.appendChild(bootstrapJS);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
