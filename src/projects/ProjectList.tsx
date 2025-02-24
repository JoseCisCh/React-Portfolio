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
        <div className="projectList">
            {projects.map(project => {
                return (<ProjectCard key={project.id} {...project}/>)
            })}
        </div>
        
    )
}

export default ProjectList;
export type { Project };