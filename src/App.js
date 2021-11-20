import './App.scss';
import Banner1 from './components/banners/Banner1';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ContactSection from './components/sections/ContactSection';
import FactsSection from './components/sections/FactsSection';
import FeaturesSection from './components/sections/FeaturesSection';
import TeamSection from './components/sections/TeamSection';

function App() {
	return (
		<div className="App">
			<Header />
			<Banner1 />
			<FeaturesSection />
			{/* <FeaturesDetailedSection /> */}
			<FactsSection />
			<TeamSection />
			<ContactSection />
			<Footer />
		</div>
	);
}

export default App;
