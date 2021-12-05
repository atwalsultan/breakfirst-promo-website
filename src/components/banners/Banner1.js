import BannerImage from "../../static/hero_image.png";

const Banner1 = ({ featuresRef, bannerRef }) => {
	return (
		<div className="banner-1" ref={ bannerRef }>
			<div>
				<h1>Pause your work and take a break with BreakFirst!</h1>
				<button onClick={ () => featuresRef.current.scrollIntoView({ behavior: 'smooth' }) }>Get Started</button>
			</div>

			<div>
				<img src={BannerImage} alt="" />
			</div>
		</div>
	);
};

export default Banner1;
