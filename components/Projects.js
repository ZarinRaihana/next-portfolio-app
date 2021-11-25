import React from 'react';

const Projects = () => {
    return (
        <div>
            <section id="projects" >
                <div className="project-area">
                    <h2 className="project-title">Projects</h2>
                    <div className="projects-list">
                    <article className="card">
                        <h3 className="card-title">QuizHut</h3>
                        {/* <div className="images">
                                    <Image src="/html.svg.png" alt="html" layout='fill' objectFit='contain'  />
                                </div>  */}
                        <p>View project</p>
                    </article>
                    <article className="card">
                        <h3 className="card-title">Cine Slate</h3>
                        {/* <img src="" alt="cineslate" /> */}
                        <p>View project</p>
                    </article>
                    <article className="card">
                        <h3 className="card-title">Portfolio</h3>
                        {/* <img src="" alt="portfolio" /> */}
                        <p>View project</p>
                    </article>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
