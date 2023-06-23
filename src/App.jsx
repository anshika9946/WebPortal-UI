import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from "./Components/Dashboard.jsx";
import Sidebar from "./Components/SideBar Section/Sidebar.jsx";

import './App.css';

const App = () => {
	return (
		<div className='container'>
			<BrowserRouter>
      <Sidebar/>
				<Routes>
					<Route path='/' exact element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App