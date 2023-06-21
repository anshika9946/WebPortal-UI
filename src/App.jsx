import React from "react";
import Dashboard from "./Components/Dashboard.jsx";

import './App.css';
import Sidebar from "./Components/SideBar Section/Sidebar.jsx";



const App = () => {
	return (
 
      <div className="container">
        <Sidebar/>
        <Dashboard/>
      </div>

	);
}

export default App