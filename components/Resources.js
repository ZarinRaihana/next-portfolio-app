import React from 'react'

const Resources = ({live, git}) => {
    return (
        <div className="project-pages-resources">
            <h3 className="project-pages-subtitle">Resources</h3> <hr/>
                <ul className="project-pages-about">
                    <li>The project is online at <a href={live} target='_blank' rel='noreferrer'>Here</a></li>
                    <li>Access the project&apos;s source on <a href={git} target='_blank' rel='noreferrer'>GITHUB</a></li>
                </ul>

        </div>
    )
}

export default Resources
