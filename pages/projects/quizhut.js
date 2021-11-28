import Image from 'next/image';
import React from 'react';
import Resources from '../../components/Resources';
import Technologies from '../../components/Technologies';

const quizhut = () => {
    return (
        <div className="projects-page">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
                <h2 className="projects-page-title">Quizhut</h2>
                <button className="project-pages-button" style={{width:'40%'}} ><a href="https://quiz-hut.herokuapp.com/" target='_blank' rel='noreferrer'>Visit the Website</a></button>
            </div>

            

            <p className="project-pages-about">Lorem Ipsum has been the industry standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it
                    to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages,</p>
                    
            <div className="project-pages-img" >
             <Image src = "/quizhut.PNG" alt="quizhut" width={1000} height={500} objectFit="contain"  />
            </div>

        <Technologies tech={["HTML5", "CSS3", "Javascript", "React", "Nodejs", "Express", "Material UI"]} />

        <Resources live={"https://quiz-hut.herokuapp.com/" } git={"https://github.com/ZarinRaihana/LMS_project"} />

                <button className="project-pages-button">Go Back</button>
        </div>
    )
}

export default quizhut
