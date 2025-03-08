import { useEffect } from 'react'
import Header from './components/header/Header.tsx'
import './App.css'
import ProjectList from './components/projects/ProjectList.tsx'
import { useLocation } from 'react-router'
import Bio from './biography/Bio.tsx'
import SkillList from './components/skills/SkillList.tsx'


function App() {
  const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

  return (
    <> 
      <Header />
      <div className='content'>
        <Bio />
        <ProjectList />
        <SkillList />
      </div>
      
    </>
  )
}

export default App
