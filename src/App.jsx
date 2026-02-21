import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Galeripage from "./pages/Galeripage";
import Prokerpage from "./pages/Prokerpage";
import Memberpage from "./pages/Memberpage";


function App() {
	return <>

	{/* Navbar */}
	<Navbar />
	
	{/* Content */}
	{/* <Routes>
		<Route path="/" element={<Homepage />} />
		<Route path="/galeri-kegiatan" element={<Galeripage />} />
		<Route path="/program-kerja" element={<Prokerpage />} />
		<Route path="/anggota" element={<Memberpage />} />
	</Routes> */}

	{/* Footer */}
	{/* <Footer /> */}

	</>
}

export default App;
