import React from 'react';
import '../Styles/Projects.css'

import projects from '../project.json'
const Projects = () => {
    return (
        <div className="projectBody">
            <h1>Projects</h1>

            {projects.map((project)=> {
                return(
                    <div className='projectCard'> 
                       <div className="titleImg">
                      <a href={project.link} target="blank"> <img src={project.img} /></a>
                      <a href={project.link} target="blank"><h2>{project.title}</h2></a>
                        </div>
                         <h4>{project.description}</h4>

                    </div>
                )
            })}
            

        </div>
    );
};

export default Projects;