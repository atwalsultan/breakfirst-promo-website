import NewTaskImage from "../../static/task.gif";
import LeaderboardImage from "../../static/groups.gif";
import LibraryImage from "../../static/library.gif";

const Banner1 = () => {
	return (
		<div className="feature-details-section">
			<div className="banner-2">
				<div>
					<h2>You can customize task schedules and set the length of interval you want</h2>
					<p>Set up your work schedule, and let us help you take care of your health.</p>
				</div>

				<div>
					<img src={NewTaskImage} alt="" />
				</div>
			</div>

			<div className="banner-2 reverse">
				<div>
					<h2>Your motion can be detected when you are doing the exercise</h2>
					<p>Set up your work schedule, and let us help you take care of your health.</p>
				</div>

				<div>
					<img src={LibraryImage} alt="" />
				</div>
			</div>

			<div className="banner-2">
				<div>
					<h2>Compete with your friends and co-workers on the group leaderboard</h2>

					<p>Set up your work schedule, and let us help you take care of your health.</p>
				</div>

				<div>
					<img src={LeaderboardImage} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Banner1;
