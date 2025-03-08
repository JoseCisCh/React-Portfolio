import { useEffect, useState } from "react"
import { Skill } from "../../types/Skill"
import './skills.css'

const SkillListItem: React.FC<Skill&{level:number}> = ({ name, subskills, level}) => {

    const colors = [
        '#6bc9a7',
        '#4cafa2',
        '#399497',
        '#327a87'
    ]

    if(subskills && Array.isArray(subskills)) {
        return (
            <>
                <li style={{color: colors[level]}} className="parentSkill"><strong>{name}</strong></li>
                <ul>
                    {subskills.map((subskill) => {
                        return <SkillListItem  key={subskill.id} {...subskill} level={level+1}/>
                    })}
                </ul>
            </>
            
        )
    } else {
        return <li>{name}</li>
    }
}


const SkillList = () => {
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        fetch('skills.json').then((response) => {
                return response.json();
            }).then((data) => {
                setSkills(data);
            }).catch((e) => {
                console.log(`An error ocurred when fetching skills data: ${e}`);
            })
    }, []);

    return (
        <div id="skills" className="skillsSection">
            <h2>My skills</h2>
            <p>
                The following are the skills I have developed during my time at
                university and my time at working at Ellucian.

            </p>
            <div className="skillsList">
                <ul>
                    {skills.map((skill) => {
                        return <SkillListItem key={skill.id} {...skill} level={0}/>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SkillList;