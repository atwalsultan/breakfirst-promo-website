import BannerImage from "../../static/hero_image.png";

const Banner1 = () => {
  return (
    <>
      <div className="banner-2">
        <div>
          <h2>
            You can customize task schedules and set the length of interval you
            want
          </h2>
          <div className="center">
            Set up your work schedule, and let us
            <br /> help you take care of your health.
          </div>
        </div>

        <div>
          <img src={BannerImage} alt="" />
        </div>
      </div>

      <div className="banner-2 reverse">
        <div>
          <h2>Your motion can be detected when you are doing the exercise</h2>
          <div>
            Set up your work schedule, and let us
            <br /> help you take care of your health.
          </div>
        </div>

        <div>
          <img src={BannerImage} alt="" />
        </div>
      </div>

      <div className="banner-2">
        <div>
          <h2>
            Compete with your friends and co-workers on the group leaderboard
          </h2>
          <div className="center">
            Set up your work schedule, and let us
            <br /> help you take care of your health.
          </div>
        </div>

        <div>
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner1;
