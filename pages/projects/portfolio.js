import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Resources from '../../components/Resources';
import Technologies from '../../components/Technologies';
import classes from '/styles/PortfolioPages.module.css';

const portfolio = () => {
    return (
        <div  className={classes.projectsPage}>
            <h2 className={classes.title}> 
            Portfolio
            </h2>

            <p  className={classes.about}>A responsive personal portfolio website to show off skills, experience, projects to potential clients and/or employers.
            </p>

            <div className={classes.img} >
                <Image src = "/portfolio.PNG" alt="quizhut" width={1000} height={500} objectFit="contain" />
            </div>

            <Technologies tech={["HTML5", "CSS3", "JavaScript", "React", "Next.js"]} />
            <Resources live={"https://zarin-raihana-245d32.netlify.app/"} git={"https://github.com/ZarinRaihana/next-portfolio-app"} />
            
            <Link href ="/#projects" passHref>
                <button className={classes.button}>Go Back</button>
            </Link>
        </div>
    )
}

export default portfolio
