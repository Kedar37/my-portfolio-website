// App.js
import React, { Suspense } from 'react';
import Home from './Home';
import './i18n';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}

export default App;
