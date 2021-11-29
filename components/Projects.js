import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from "/styles/Projects.module.css";

const Projects = () => {
    return (
        <div>
            <section id="projects" >
                <div className={classes.projectArea}>
                    <h2 className={classes.title}>Projects</h2>
                    <div className={classes.list}>
                        
                    <Link href="/projects/quizhut" passHref>
                        <article className={classes.card}>
                            <div className={classes.cardImages}>
                                <Image src="/quizhut.PNG" alt="html" layout='fill' objectFit='contain'  />
                            </div>
                            <h3 className={classes.cardTitle}>QuizHut</h3>
                            <p>View project</p>
                        </article>
                    </Link>

                    <Link href="/projects/cineslate" passHref>
                        <article className={classes.card}>
                            <div className={classes.cardImages}>
                                <Image src="/cineslate.PNG" alt="cineslate" layout='fill' objectFit='contain'  />
                            </div>
                            <h3 className={classes.cardTitle}>Cine Slate</h3>
                            <p>View project</p>
                        </article>
                    </Link>

                   <Link href="/projects/portfolio" passHref>
                        <article className={classes.card}>
                            <div className={classes.cardImages}>
                                <Image src="/portfolio.PNG" alt="portfolio" layout='fill' objectFit='contain'  />
                            </div>
                            <h3 className={classes.cardTitle}>Portfolio</h3>
                            <p>View project</p>
                        </article>
                   </Link>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
