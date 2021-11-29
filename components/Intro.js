import React from 'react';
import classes from "/styles/Intro.module.css";

const Intro = () => {
    return (
        <div>
             <div className={classes.animationArea}>
                <ul className={classes.boxArea}>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div className={classes.introText}>
                  <h1 className={classes.name}>Hi, I&apos; m <span>Zarin Raihana.</span></h1>
                  <p className={classes.subtitle}>Javascript Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Intro
