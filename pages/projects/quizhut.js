import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Resources from '../../components/Resources';
import Technologies from '../../components/Technologies';
import classes from '/styles/PortfolioPages.module.css';

const quizhut = () => {
    return (
        <div className={classes.projectsPage}>
            
            <div className={classes.header}>
                <h2 className={classes.title}>QuizHut</h2>
                <button className={`${classes.button} ${classes.visitButton}`}  >
                    <a href="https://quiz-hut.herokuapp.com/" target='_blank' rel='noreferrer'>Visit the Website</a>
                </button>
            </div>          

            <p className={classes.about}>An online examination system which help teachers to create, conduct and evaluate assessments and quizzes online.</p>
                    
            <div className={classes.img} >
             <Image src = "/quizhut.PNG" alt="quizhut" width={1000} height={500} objectFit="contain"  />
            </div>

            <Technologies tech={["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Material UI"]} />

            <Resources live={"https://quiz-hut.herokuapp.com/" } git={"https://github.com/ZarinRaihana/LMS_project"} />

            <Link href ="/#projects" passHref>
                <button className={classes.button}>Go Back</button>
             </Link>
        </div>
    )
}

export default quizhut
