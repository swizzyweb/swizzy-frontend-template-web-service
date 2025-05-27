// ./react/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18+
import App from './App'; // Assuming your main component is in App.tsx

// Import your main CSS file (e.g., where Tailwind's output is imported)
import './index.css'; // Make sure this file exists and imports your Tailwind CSS

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element with ID "root" not found in the document.');
}
