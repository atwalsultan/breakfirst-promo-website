import { useRef } from "react";

import "./App.scss";
import Banner1 from "./components/banners/Banner1";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ContactSection from "./components/sections/ContactSection";
import FactsSection from "./components/sections/FactsSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import TeamSection from "./components/sections/TeamSection";
import Details from "./components/sections/Details";

function App() {
	const featuresRef = useRef(null);
	const teamRef = useRef(null);
	const contactRef = useRef(null);
	const bannerRef = useRef(null)

	return (
		<div className="App">
			<Header featuresRef={featuresRef} teamRef={teamRef} contactRef={contactRef} bannerRef={bannerRef} />
			<Banner1 featuresRef={featuresRef} bannerRef={bannerRef} />
			<FeaturesSection featuresRef={featuresRef} />
			<Details />
			<FactsSection />
			<TeamSection teamRef={teamRef} />
			<ContactSection contactRef={contactRef} />
			<Footer />
		</div>
	);
}

export default App;
