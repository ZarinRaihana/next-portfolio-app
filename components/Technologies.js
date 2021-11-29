import React from 'react';
import classes from "/styles/PortfolioPages.module.css";

const Technologies = ({tech}) => {
    return (
        <div className={classes.tech}>
            <h3 className={classes.subtitle}>Technical Sheet</h3><hr/>
            <p className={classes.about}>
            Code technologies I got involved with while working on this project - 
            </p>
            <ul>
                {tech.length >0 ? tech.map(t =>
                     <li key={t}>{t}</li>
                ): ""}
            </ul>
        </div>
    )
}

export default Technologies
