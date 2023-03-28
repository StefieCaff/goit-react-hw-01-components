import PropTypes from 'prop-types';
import { StyledTitle, StyledNoTitle } from './styled-statistics'
//import { useState } from 'react';

export const Statistics = props => {
    const {
        title,
        stats
    } = props;
 
    const getColor = () => {
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += Math.floor(Math.random() * 10);
        }
        return color;
    };

    return (
        <>
        {!title 
            ?  <StyledNoTitle className="statistics">
                    <ul className="stat-list">
                    {stats.map(stat => (    
                        <li key={stat.id} className="item" style={{ backgroundColor: getColor() }}>
                            <span className="label">{stat.label}</span>
                            <span className="percentage">{stat.percentage}%</span>
                        </li>
                    ))}                
                    </ul>
               </StyledNoTitle>
            :  <StyledTitle className="statistics">
                    <h2 className="title">{title}</h2>
                    <ul className="stat-list">
                    {stats.map(stat => (    
                        <li key={stat.id} className="item" style={{ backgroundColor: getColor() }}>
                            <span className="label">{stat.label}</span>
                            <span className="percentage">{stat.percentage}%</span>
                        </li>
                    ))}
                    </ul>

               </StyledTitle>
        } 
        </>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }),
};
  
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const randomColor = getRandomHexColor;