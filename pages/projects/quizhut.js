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
                <h2 className={classes.title}>Quizhut</h2>
                <button className={`${classes.button} ${classes.visitButton}`}  >
                    <a href="https://quiz-hut.herokuapp.com/" target='_blank' rel='noreferrer'>Visit the Website</a>
                </button>
            </div>          

            <p className={classes.about}>Lorem Ipsum has been the industry standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it
                    to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages,</p>
                    
            <div className={classes.img} >
             <Image src = "/quizhut.PNG" alt="quizhut" width={1000} height={500} objectFit="contain"  />
            </div>

            <Technologies tech={["HTML5", "CSS3", "Javascript", "React", "Nodejs", "Express", "Material UI"]} />

            <Resources live={"https://quiz-hut.herokuapp.com/" } git={"https://github.com/ZarinRaihana/LMS_project"} />

            <Link href ="/" passHref>
                <button className={classes.button}>Go Back</button>
             </Link>
        </div>
    )
}

export default quizhut
