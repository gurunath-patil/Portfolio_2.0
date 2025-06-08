import SideMenuConatiner from './components/side-menu/sideMenuContainer'
import './App.css'
import NavBar from './components/navBar'
import { Outlet } from 'react-router-dom'
function App() {
	return (
		<div id='main-container' className=''>
			<SideMenuConatiner />
			<div id='second-container' className='rounded-lg overflow-hidden'>
				<NavBar />
				<Outlet />
			</div>
		</div>
	)
}

export default App
