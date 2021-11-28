import Image from 'next/image';
import React from 'react';
import Resources from '../../components/Resources';
import Technologies from '../../components/Technologies';

const cineslate = () => {
    return (
        <div  className="projects-page">
            <button className="project-pages-button "><a href="https://boring-blackwell-f05462.netlify.app/" target='_blank' rel='noreferrer'>Visit the Website</a></button>
            <h2 className="projects-page-title">Cine Slate </h2>

            <p className="project-pages-about">Lorem Ipsum has been the industry standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it
                    to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages,
            </p>
            <div className="project-pages-img">
                <Image src = "/cineslate.PNG" alt="quizhut" width={1000} height={500} objectFit="contain"  />
            </div>

            <Technologies tech = {["HTML5" ,"CSS3", "Javascript", "React", "Material UI"]} />

            <Resources live={"https://boring-blackwell-f05462.netlify.app/" } git={"https://github.com/ZarinRaihana/cine-slate"} />

                <button className="project-pages-button">Go Back</button>
        </div>
    )
}

export default cineslate
