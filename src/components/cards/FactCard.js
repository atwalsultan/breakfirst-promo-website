const FactCard = ({ fact }) => {
    return (
        <div className="fact-card">
            <img src={fact.factIcon} alt="" />
            <h3>{fact.factHeading}</h3>
            <p>{fact.factDescription}</p>
        </div>
    )
}

export default FactCard
