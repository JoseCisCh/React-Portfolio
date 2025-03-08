export type Skill = {
    id: number;
    name: string;
    subskills?: Skill[]
}