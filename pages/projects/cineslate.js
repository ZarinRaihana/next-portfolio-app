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

            <p className={classes.about}>Lorem Ipsum has been the industry standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it
                    to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages,
            </p>
            <div className={classes.img}>
                <Image src = "/cineslate.PNG" alt="quizhut" width={1000} height={500} objectFit="contain"  />
            </div>

            <Technologies tech = {["HTML5" ,"CSS3", "Javascript", "React", "Material UI"]} />

            <Resources live={"https://boring-blackwell-f05462.netlify.app/" } git={"https://github.com/ZarinRaihana/cine-slate"} />

            <Link href ="/" passHref>
                <button className={classes.button}>Go Back</button>
            </Link>
        </div>
    )
}

export default cineslate
