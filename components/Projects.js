import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Projects = () => {
    return (
        <div>
            <section id="projects" >
                <div className="project-area">
                    <h2 className="project-title">Projects</h2>
                    <div className="projects-list">
                    <Link href="/projects/quizhut" passHref>
                        <article className="card">
                            <div className="card-images">
                                <Image src="/quizhut.PNG" alt="html" layout='fill' objectFit='contain'  />
                            </div>
                            <h3 className="card-title">QuizHut</h3>
                            <p>View project</p>
                        </article>
                    </Link>

                    <Link href="/projects/cineslate" passHref>
                        <article className="card">
                            <div className="card-images">
                                <Image src="/cineslate.PNG" alt="cineslate" layout='fill' objectFit='contain'  />
                            </div>
                            <h3 className="card-title">Cine Slate</h3>
                            <p>View project</p>
                        </article>
                    </Link>

                   <Link href="/projects/portfolio" passHref>
                        <article className="card">
                            <div className="card-images">
                                <Image src="/portfolio.PNG" alt="portfolio" layout='fill' objectFit='contain'  />
                            </div>
                            <h3 className="card-title">Portfolio</h3>
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
