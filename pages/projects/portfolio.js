import Image from 'next/image';
import React from 'react';
import Resources from '../../components/Resources';
import Technologies from '../../components/Technologies';

const portfolio = () => {
    return (
        <div  className="projects-page">
            <h2 className="projects-page-title"> 
            Portfolio
            </h2>

            <p  className="project-pages-about">Lorem Ipsum has been the industry standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it
                    to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages,
            </p>

            <div className="project-pages-img" >
                <Image src = "/portfolio.PNG" alt="quizhut" width={1000} height={500} objectFit="contain" />
            </div>

            <Technologies tech={["HTML5", "CSS3", "Javascript", "React", "Nextjs"]} />
            <Resources live={""} git={"https://github.com/ZarinRaihana/next-portfolio-app"} />
            
            <button className="project-pages-button">Go Back</button>
        </div>
    )
}

export default portfolio
