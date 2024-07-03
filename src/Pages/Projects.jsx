import React from 'react';
import '../Styles/Projects.css'

import projects from '../project.json'
const Projects = () => {
    return (
        <div className="projectBody">
            <div className="projectLegend">
                <h1 className="projectTitle">Projects</h1>


                <img src='github.svg' alt="Github Icon" />
                <text> : Github</text>
                <br />


                <img src='idea.svg' alt="Wireframe Icon" />
                <text> : Wireframe</text>
                <br />

            </div>


            {projects.map((project, index) => {
                return (
                    <div key={index} className='projectCard'>
                        <div className="titleImg">
                            <a href={project.link} target="blank"> <img src={project.img} /></a>
                            <div className="titleGit">
                                <a href={project.link} target="blank"><h2>{project.title}</h2></a>
                                <div className='projectButton'>
                                    <a href={project.github} target="blank"> <img src='github.svg' /></a>
                                    {project.idea ? (
                                        <a href={project.idea} target="_blank">
                                            <img src="idea.svg" alt="Idea Image" />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        <h4>{project.description}</h4>

                    </div>
                )
            })}


        </div>
    );
};

export default Projects;