import React from 'react';
import classes from '/styles/About.module.css';

const About = () => {
    return (
        <div>
             <section id="about" >
                <div className={classes.aboutArea} >
                    <h2 className={classes.title}>About me</h2>
                    <p className={classes.text}>
                    Lorem Ipsum has been the industry standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it
                    to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages,
                    </p>
                </div>
            </section>
        </div>
    )
}

export default About
