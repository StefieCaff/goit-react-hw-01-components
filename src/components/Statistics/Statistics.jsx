import PropTypes from 'prop-types';

export const Statistics = ({
    title,
    stats

}) => {

        <section className="statistics">
            <h2 className="title">{title}</h2>
            <ul className="stat-list">
                <List/>
            </ul>
        </section>
};


const List = ( stats ) => {
    stats.map(stat => 
        <li key={ stat.id } className="item">
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
        </li>)
};


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }),
};