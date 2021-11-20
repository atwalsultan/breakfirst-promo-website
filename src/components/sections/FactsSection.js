import FactCard from '../cards/FactCard'

const FactsSection = () => {
    const facts = [
        {
            factHeading: "Cause of Mortality",
            factDescription: "Sedentary lifestyles increase all causes of mortality, while moving just 2 minutes every hour can decrease the risk by up to 33%.",
            // factIcon: 
        },
        {
            factHeading: "Sitting Disease",
            factDescription: "An increased BMI due to a sedentary lifestyle can lead to decreased productivity and increased absenteeism from necessary activities like work.",
            // factIcon: 
        },
        {
            factHeading: "Mental Impact",
            factDescription: "A sedentary lifestyle have a negative impact on mental well-being. Its combination with the physical impact to health makes sedentary lifestyle problematic.",
            // factIcon: 
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
