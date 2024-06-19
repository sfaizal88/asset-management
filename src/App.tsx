/**
 * App component
 * @author - Faizal
 * @date - 19th June 2024
 */
// GENERIC IMPORT
import React from 'react';

// STYLE IMPORT
import './app.css';

// ROUTER IMPORT
import EntryRoutes from './view/routes/entryRoutes';

function App() {
  return (
    <>
      <EntryRoutes/>
    </>
  );
}

export default App;
