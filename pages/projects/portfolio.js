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

            <p  className={classes.about}>Lorem Ipsum has been the industry standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it
                    to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages,
            </p>

            <div className={classes.img} >
                <Image src = "/portfolio.PNG" alt="quizhut" width={1000} height={500} objectFit="contain" />
            </div>

            <Technologies tech={["HTML5", "CSS3", "Javascript", "React", "Nextjs"]} />
            <Resources live={""} git={"https://github.com/ZarinRaihana/next-portfolio-app"} />
            
            <Link href ="/" passHref>
                <button className={classes.button}>Go Back</button>
            </Link>
        </div>
    )
}

export default portfolio
