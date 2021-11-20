import FactIcon from '../../static/fact-icon.svg';

const FactCard = ({ fact }) => {
    return (
        <div className="fact-card">
            <img src={FactIcon} alt="" />
            <h3>{fact.factHeading}</h3>
            <p>{fact.factDescription}</p>
        </div>
    )
}

export default FactCard
