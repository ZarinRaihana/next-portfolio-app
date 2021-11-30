import React from 'react';
import classes from '/styles/About.module.css';

const About = () => {
    return (
        <div>
             <section id="about" >
                <div className={classes.aboutArea} >
                    <h2 className={classes.title}>About me</h2>
                    <p className={classes.text}>
                    My name is Zarin Raihana. I&apos;m a fresh graduate looking for job opportunities, interested working in front-end development. I have completed my Bachelor&apos;s degree in Computer Science & Engineering at Ranada Prasad Shaha University. Love to watch movies and tv series.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default About
