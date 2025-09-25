import SideMenuConatiner from './components/side-menu/sideMenuContainer'
import './App.css'
import NavBar from './components/navBar'
import { Outlet } from 'react-router-dom'
function App() {
	return (
		<div className='bg-black flex flex-col justify-center p-4 md:p-4 gap-y-3 md:gap-y-5 lg:flex-row lg:gap-x-5 h-dvh'>
			<SideMenuConatiner />
			<div className='bg-[#0b192c] rounded-lg overflow-hidden w-full relative'>
				<NavBar />
				<Outlet />
			</div>
		</div>
	)
}

export default App
