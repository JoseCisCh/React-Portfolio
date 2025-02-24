import { useState } from 'react'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import Header from './header/Header.tsx'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectList from './projects/ProjectList.tsx'
import Contact from './contact/Contact.tsx'


function App() {
  let imageUrl: string | null = null;

  return (
    <> 
      <Header />
      <div className='content'>
        <div id="bio" className="biographySection">
          {imageUrl ? 
          (<img 
            className="profilePhoto" 
            src={imageUrl}></img>) : 
          (<FontAwesomeIcon 
            className="profilePhoto" 
            icon={faUserAstronaut} 
            ></FontAwesomeIcon>)}

          <h2>José Andrés Cisneros Chauviere</h2>
          <p>Computer systems engineer with experience in software development with various technologies, including web
development tools like HTML, CSS, ReactJS, AngularJS and mobile application development
(iOS with swift). Motivated to keep growing and learning better software development standards. Looking forward to
collaborate in the development of
High-Impact applications.</p>
        </div>
        <div id="portfolio" className='projects'>
          <h2>Checkout my portfolio projects!</h2>
            <ProjectList />
        </div>
        <Contact />
      </div>
      
    </>
  )
}

export default App
