import { useState } from "react";
import type { Project } from "./ProjectList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type PojectWithDefaults = Project & React.ComponentProps<'div'>;

const ProjectCard: React.FC<Project> = ({title, description, projectIcon, projectIconAlt, githubLink, demoLink}) => {

    const [expandCard, setExpandCard] = useState(false);

    const handleMouseHover = (e : any) => {
        if(e.type == 'mouseover') {
            setExpandCard(true);
        } else if(e.type === 'mouseleave') {
            setExpandCard(false);
        }
    }

    return (
        <div className="projectCard shortenCard" onMouseOver={handleMouseHover} onMouseLeave={handleMouseHover}>
            <div className="projectHeader">
                <h3 className="projectTile">{title}</h3>
                {projectIcon && <FontAwesomeIcon icon={projectIcon as IconProp} size="2x"/>}
                {!projectIcon && projectIconAlt && <p>{projectIconAlt}</p>}
            </div>
            {expandCard && 
                <div className="projectDesc">
                    <p>{description}</p>
                    {(githubLink || demoLink) && <div>
                        {githubLink && (<><a href={githubLink}>Github repo &nbsp;{'>'}</a></>)}
                        {demoLink && (<><br/><a href={demoLink}>Demo &nbsp;{'>'}</a></>)}
                    </div>}
                    
                    
                </div>}
        </div>
        
    )
}

export default ProjectCard;