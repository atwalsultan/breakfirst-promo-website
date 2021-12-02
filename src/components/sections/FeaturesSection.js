import ScheduleIcon from '../../static/schedule-icon.svg';
import ExerciseIcon from '../../static/exercise-icon.svg';
import StatsIcon from '../../static/weekly-stats-icon.svg';
import FeatureCard from '../cards/FeatureCard';

const FeaturesSection = ({ featuresRef }) => {
    const features = [
        {
            featureName: "Break reminder",
            featureDescription: "Set up your schedule, we will fire alarms and remind you to take breaks from busy work.",
            featureIcon: ScheduleIcon
        },
        {
            featureName: "Exercise library",
            featureDescription: "Check our collection of simple and effective exercises to fit them in your break schedule.",
            featureIcon: ExerciseIcon
        },
        {
            featureName: "Weekly statistics",
            featureDescription: "Stay updated about your performance and progress in reducing health risks.",
            featureIcon: StatsIcon
        }
    ];

    return (
        <div className="features-section" ref={ featuresRef }>
            {
                features.map((feature, index) => (
                    <FeatureCard feature={feature} key={index} />
                ))
            }
        </div>
    )
}

export default FeaturesSection
