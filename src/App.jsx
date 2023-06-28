import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from "./Components/Dashboard.jsx";
import Sidebar from "./Components/SideBar Section/Sidebar.jsx";

import './App.css';
import Manage from './Components/pages/Manage.jsx';
import Hardware from './Components/pages/Hardware.jsx';
import Personnel from './Components/pages/Personnel.jsx';
import ManageAdmin from './Components/pages/ManageAdmin.jsx';

const App = () => {
	return (
		<div className='container'>
			<BrowserRouter>
      <Sidebar/>
				<Routes>
					<Route path='/' exact element={<Dashboard />} />
					<Route path='/bandobast' exact element={<Manage/>} />
					<Route path='/hardware' exact element={<Hardware/>} />
					<Route path='/personnel' exact element={<Personnel />} />
					<Route path='/manageAdmin' exact element={<ManageAdmin />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App