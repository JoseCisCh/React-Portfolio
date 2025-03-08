import { Skill } from "./Skill";

export type SkillCategory = {
    id: number;
    name: string;
    subcategory?: SkillCategory;
    skills: Skill[];
}