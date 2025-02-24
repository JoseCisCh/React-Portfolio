import { useState } from "react";
import type { Project } from "./ProjectList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSwift } from "@fortawesome/free-brands-svg-icons";

type PojectWithDefaults = Project & React.ComponentProps<'div'>;

const ProjectCard: React.FC<PojectWithDefaults> = ({title, description, projectIcon}) => {

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
            </div>
            {expandCard && <p className="projectDesc">{description}</p>}
        </div>
        
    )
}

export default ProjectCard;