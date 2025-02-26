import { useEffect, useState } from 'react'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import Header from './header/Header.tsx'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectList from './projects/ProjectList.tsx'
import Contact from './contact/Contact.tsx'
import { useLocation } from 'react-router'
import Bio from './biography/Bio.tsx'


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
        <Contact />
      </div>
      
    </>
  )
}

export default App
