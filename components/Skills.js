import Image from 'next/image';
import React from 'react';

const Skills = () => {
    return (
        <div>
            <section>
                <div className="skill-area">
                    <h2 className="skill-title">Skills</h2>

                    <div className="skill-images">
                        <div className="images">
                        <Image src="/html.svg.png" alt="html" layout='fill' objectFit='contain'  />
                    </div>    
                    <div className="images">
                        <Image src="/css.svg.png" alt="css" layout='fill' objectFit='contain'  />
                        </div>
                    <div className="images">
                        <Image src="/js.png" alt="js" layout='fill' objectFit='contain'  />
                        </div>
                    <div className="images">
                        <Image src="/React.jpg" alt="react" layout='fill' objectFit='contain'  />
                        </div>
                    <div className="images">
                        <Image src="/MongoDB.png" alt="mongodb" layout='fill' objectFit='contain'  />
                        </div>
                    <div className="images">
                        <Image src="/Node.js.svg.png" alt="node" layout='fill' objectFit='contain'  />
                        </div>
                    <div className="images">
                        <Image src="/express.png" alt="express" layout='fill' objectFit='contain'  />
                        </div>
                    <div className="images">
                        <Image src="/c.png" alt="c" layout='fill' objectFit='contain'  />
                    </div>
                    <div className="images">
                        <Image src="/Java.svg.png" alt="java" layout='fill' objectFit='contain'  />
                    </div>
                    <div className="images">
                        <Image src="/MySQL.png" alt="mysql" layout='fill' objectFit='contain'  />
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
