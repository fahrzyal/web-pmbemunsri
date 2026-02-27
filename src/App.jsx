import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage"
import Galeripage from "./pages/Galeripage";
import Homedrypage from "./pages/Homedrypage";
import Profilepage from "./pages/Profilepage";


function App() {
	//TODO: Darkmode state
	const [isDarkMode, setIsDarkMode] = React.useState(false);
	
	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return <>
	<div className={isDarkMode ? "dark" : ""}>
		<Navbar 
			toggleDarkMode={toggleDarkMode} 
			isDarkMode={isDarkMode} 
		/>	
		
		{/* Content */}
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/about-us" element={<Aboutpage />} />
			<Route path="/gallery" element={<Galeripage />} />
			<Route path="/homedrycoffee" element={<Homedrypage />} />
			<Route path="/member" element={<Profilepage />} />
		</Routes>

		{/* Footer */}
		<Footer />	
	</div>
	</>
}

export default App;
