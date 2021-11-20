import BannerImage from '../../static/banner-1-image.svg';

const Banner1 = () => {
    return (
        <div className="banner-1">
            <div>
                <h1>Pause your work and take a break with BreakFirst!</h1>
                <div className="button">Get Started</div>
            </div>

            <div>
                <img src={BannerImage} alt="" />
            </div>
        </div>
    )
}

export default Banner1
