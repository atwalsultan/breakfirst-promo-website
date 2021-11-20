const FeatureCard = ({ feature }) => {
    return (
        <div className="feature-card">
            <img src={feature.featureIcon} alt=""/>
            <h3>{feature.featureName}</h3>
            <p>{feature.featureDescription}</p>
        </div>
    )
}

export default FeatureCard
