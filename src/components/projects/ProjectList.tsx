import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import './projects.css'

type Project = {
    id: number;
    title: string[15];
    description: string;
    imageUrl?: string;
    projectIcon?: string;
    projectIconAlt?: string;
    githubLink?: string;
    demoLink?: string;
}

const ProjectList = () => {

    const [projects, setProjects] = useState<Project[]|[]>([]);

    useEffect(() => {
        fetch('projects.json')
            .then((response) => response.json())
            .then((json) => { setProjects(json)})
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <div id="portfolio" className='projects'>
            <h2>Checkout my portfolio projects!</h2>
            <div className="projectList">
                {projects.map(project => {
                    return (<ProjectCard key={project.id} {...project}/>)
                })}
            </div>
        </div>
        
    )
}

export default ProjectList;
export type { Project };