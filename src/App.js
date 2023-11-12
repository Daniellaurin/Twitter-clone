import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed.js';
import './App.css';


function App() {
  return (
    <div className="app">
      <h1>twitter clone</h1>

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
    </div>
  );
}

export default App;
