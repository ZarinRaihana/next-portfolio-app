import React from 'react';
import classes from "/styles/PortfolioPages.module.css";

const Resources = ({live, git}) => {
    return (
        <div className={classes.resources}>
            <h3 className={classes.subtitle}>Resources</h3> <hr/>
                <ul className={classes.about}>
                    <li>The project is online at <a href={live} target='_blank' rel='noreferrer'>Here</a></li>
                    <li>Access the project&apos;s source on <a href={git} target='_blank' rel='noreferrer'>GITHUB</a></li>
                </ul>
        </div>
    )
}

export default Resources
