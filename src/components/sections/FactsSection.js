import FactCard from '../cards/FactCard';
import AlertIcon from '../../static/alert-1.svg';
import MedicineIcon from '../../static/medicine-1.svg';
import DementiaIcon from '../../static/dementia-1.svg';

const FactsSection = () => {
    const facts = [
        {
            factHeading: "Cause of Mortality",
            factDescription: "A sedentary lifestyle increases all causes of mortality, while moving just 2 minutes every hour can decrease the risk by up to 33%.",
            factIcon: AlertIcon
        },
        {
            factHeading: "Sitting Disease",
            factDescription: "An increased BMI due to a sedentary lifestyle can lead to decreased productivity and increased absenteeism from necessary activities like work.",
            factIcon: MedicineIcon
        },
        {
            factHeading: "Mental Impact",
            factDescription: "A sedentary lifestyle has a negative impact on mental well-being. Its combination with the physical impact to health makes a sedentary lifestyle problematic.",
            factIcon: DementiaIcon
        }
    ]

    return (
        <div className="facts-section">
            <h2>Why should we care about a sedentary lifestyle?</h2>

            <div className="facts">
                {
                    facts.map((fact, index) => (
                        <FactCard fact={fact} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default FactsSection
