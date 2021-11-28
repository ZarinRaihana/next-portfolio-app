import React from 'react';

const Technologies = ({tech}) => {
    return (
        <div className="project-pages-tech">
            <h3 className="project-pages-subtitle">Technical Sheet</h3><hr/>
            <p className="project-pages-about">
            Code technologies I got involved with while working on this project - 
            </p>
            <ul>
                {tech.length >0 ? tech.map(t =>
                     <li key={t}>{t}</li>
                ): ""}
            </ul>
        </div>
    )
}

export default Technologies
