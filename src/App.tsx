import { useEffect, useState } from 'react'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import Header from './components/header/Header.tsx'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectList from './components/projects/ProjectList.tsx'
import Contact from './components/contact/Contact.tsx'
import { useLocation } from 'react-router'
import Bio from './biography/Bio.tsx'
import SkillList from './components/skills/SkillList.tsx'


function App() {
  let imageUrl: string | null = null;
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
