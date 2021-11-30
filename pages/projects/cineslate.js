import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Resources from '../../components/Resources';
import Technologies from '../../components/Technologies';
import classes from '/styles/PortfolioPages.module.css';

const cineslate = () => {
    return (
        <div  className={classes.projectsPage}>
            
             <div className={classes.header}>
                <h2 className={classes.title}>Cine Slate </h2>
                <button className={`${classes.button} ${classes.visitButton}`}>
                    <a href="https://boring-blackwell-f05462.netlify.app/" target='_blank' rel='noreferrer'>Visit the Website</a>
                </button>
            </div>

            <p className={classes.about}>A responsive movie app built with React and Material UI using TMDB api which provides information about movies and tv series.
            </p>
            <div className={classes.img}>
                <Image src = "/cineslate.PNG" alt="quizhut" width={1000} height={500} objectFit="contain"  />
            </div>

            <Technologies tech = {["HTML5" ,"CSS3", "Javascript", "React", "Material UI"]} />

            <Resources live={"https://boring-blackwell-f05462.netlify.app/" } git={"https://github.com/ZarinRaihana/cine-slate"} />

            <Link href ="/#projects" passHref>
                <button className={classes.button}>Go Back</button>
            </Link>
        </div>
    )
}

export default cineslate
