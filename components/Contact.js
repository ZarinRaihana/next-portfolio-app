import React from 'react';
import classes from '/styles/Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" >
        <div className={classes.contactArea}>
            <h2 className={classes.title}>Get in Touch with me</h2>
            <p className={classes.text}>I&apos;m seeking out job opportunities where I can grow, learn and develop my skills. <br/> <br/> 
            Feel free to reach out through any platform below: </p>
            <br/>
            <div className={classes.email}>
                <a href="mailto:zarinraihana09@gmail.com" target ="_blank" rel="noreferrer" >zarinraihana09@gmail.com </a><br/><br/>
                <a href="https://www.linkedin.com/in/zarin-raihana-46a580227/" target ="_blank" rel="noreferrer" > LinkedIn</a>
            </div>
            
        </div>
        </section>
    )
}

export default Contact
