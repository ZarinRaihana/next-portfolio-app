import React from 'react'

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
            <h3 className="project-pages-subtitle">Technical Sheet</h3>
            <p className="project-pages-about">
            Code technologies I got involved with while working on this project - 
            </p>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Nextjs</li>
            </ul>
            
            <h3 className="project-pages-subtitle">Resources</h3>

                <ul className="project-pages-about">
                    <li>The project is online at </li>
                    <li>Access the project&apos;s source on GITHUB</li>
                </ul>

            <button>Go Back</button>
        </div>
    )
}

export default portfolio
