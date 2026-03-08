import React from "react";

// AOS
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	useEffect(() => {
	AOS.init({
		duration: 1000,
		once: false,
	});
	}, []);

	return <>
	<div>
		<ScrollToTop />
		<Navbar />	
		<mainContent />
		<Footer />	
	</div>
	</>
}

AOS.init();

export default App;
