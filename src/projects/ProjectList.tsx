import ProjectCard from "./ProjectCard";
import './projects.css'

type Project = {
    title: string[15];
    description: string;
    imageUrl?: string;
    projectIcon?: string;
}

const ProjectList = () => {


    return (
        <div className="projectList">
            <ProjectCard title='Project 1 Thsild' description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum sagittis augue, a porttitor nisl pulvinar vel. Sed quam augue, dictum ut turpis id, rhoncus vehicula est. Aliquam eu quam massa. Sed rutrum sollicitudin mauris. Aenean consectetur nunc sit amet neque tempus, vel convallis mauris auctor. Sed metus tellus, vulputate in congue bibendum, dignissim eu sapien. Phasellus nec ullamcorper dui. Etiam eget lacus diam. Suspendisse imperdiet augue in arcu facilisis, non lacinia metus ultrices. Phasellus pharetra libero in ornare feugiat. Sed nec porttitor orci. Mauris commodo dictum nunc nec vehicula. Quisque non tellus eleifend, bibendum nunc eget, luctus massa. Vivamus et ipsum quam. Duis ut nunc porttitor mauris dignissim ultrices quis in est. Cras at odio auctor, gravida nisi sed, bibendum erat. Sed quis lectus sed justo gravida dictum id id metus. Donec eget ligula nec dui maximus rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ac nulla eu eros suscipit ornare." projectIcon="fa-brands fa-swift"/>
            <ProjectCard title='Project 2' description="This is the description of the project 2"/>
            <ProjectCard title='Project 3' description="This is the description of the project 3"/>
        </div>
        
    )
}

export default ProjectList;
export type { Project };