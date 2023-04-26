import React from 'react';
import * as ReactDOM from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Winds App</h1>
      </header>
    </div>
  )
}
const windsApp = reactToWebComponent(App, React, ReactDOM);
customElements.define('winds-app', windsApp);

export default App;
