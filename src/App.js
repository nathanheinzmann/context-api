import React from 'react';
import Counter from "./components/Counter";
import Mirror from "./components/Mirror";

import CountProvider from "./context/Count";

function App() {
  return (
    <CountProvider>
      <div>
        <Counter />
        <hr />
        <Mirror />
      </div>
    </CountProvider>
  );
}

export default App;
