import Image from 'next/image';
import React from 'react';
import classes from "/styles/Skills.module.css";

const Skills = () => {
    return (
        <div>
            <section id="skills">
                <div className={classes.skillArea} >
                    <h2 className={classes.title}>Skills</h2>

                    <div className={classes.skillImages}>
                        <div className={classes.images}>
                        <Image src="/html.svg.png" alt="html" layout='fill' objectFit='contain'  />
                    </div>    
                    <div className={classes.images}>
                        <Image src="/css.svg.png" alt="css" layout='fill' objectFit='contain'  />
                        </div>
                    <div className={classes.images}>
                        <Image src="/js.png" alt="js" layout='fill' objectFit='contain'  />
                        </div>
                    <div className={classes.images}>
                        <Image src="/React.jpg" alt="react" layout='fill' objectFit='contain'  />
                        </div>
                    <div className={classes.images}>
                        <Image src="/MongoDB.png" alt="mongodb" layout='fill' objectFit='contain'  />
                        </div>
                    <div className={classes.images}>
                        <Image src="/Node.js.svg.png" alt="node" layout='fill' objectFit='contain'  />
                        </div>
                    <div className={classes.images}>
                        <Image src="/express.png" alt="express" layout='fill' objectFit='contain'  />
                        </div>
                    <div className={classes.images}>
                        <Image src="/c.png" alt="c" layout='fill' objectFit='contain'  />
                    </div>
                    <div className={classes.images}>
                        <Image src="/Java.svg.png" alt="java" layout='fill' objectFit='contain'  />
                    </div>
                    <div className={classes.images}>
                        <Image src="/MySQL.png" alt="mysql" layout='fill' objectFit='contain'  />
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
