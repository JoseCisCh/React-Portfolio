import { useEffect, useRef, useState } from "react";
import type { Project } from "./ProjectList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type PojectWithDefaults = Project & React.ComponentProps<'div'>;
type ProjectWithIndex = Project&{index: number};

const ProjectCard: React.FC<ProjectWithIndex> = ({title, description, projectIcon, projectIconAlt, githubLink, demoLink, index}) => {

    const [expandCard, setExpandCard] = useState(false);
    const projectCard = useRef<any>(null);

    const handleMouseHover = (e : any) => {
        if(e.type == 'mouseover') {
            setExpandCard(true);
        } else if(e.type === 'mouseleave') {
            setExpandCard(false);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            console.log(projectCard);
            if(projectCard.current){
                projectCard.current.style.display = 'flex';
            }
        }, index * 400);
    }, []);

    return (
        <div ref={projectCard} className="projectCard shortenCard" onMouseOver={handleMouseHover} onMouseLeave={handleMouseHover}>
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