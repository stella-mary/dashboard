
import React from 'react'
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Header from './components/Header/Header.jsx';
import MenuItems from './components/MenuItems/MenuItems.jsx';
import DashImg from './components/DashImg/DashImg.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <MenuItems />
      <Dashboard />
      <DashImg />
    </div>
  );
}

export default App;
