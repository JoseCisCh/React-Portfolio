import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { faSwift,faLinkedin, faGithub, faReact, faJava  } from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AlertProvider } from './context/alertContext.tsx';
import Alert from './components/Alert.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Resume from './components/resume/Resume.tsx';

library.add(faSwift, faLinkedin, faGithub, faReact, faJava);

const theme = extendTheme({
  styles: {
    global: {
      'chakra-ui-light': {
        all: 'none'
      },
      '[data-theme]': {
        all: 'none'
      },
      'body': {
        'color': 'rgba(255, 255, 255, 0.87)',
        'background-color': '#242424'
      }
    }
  }
});

createRoot(document.getElementById('root')!).render(
  <ChakraProvider 
    theme={theme} 
    resetCSS={false}>
    <AlertProvider>
      <StrictMode>
        <BrowserRouter basename="/React-Portfolio/">
          <Routes>
              <Route index element={<App />}/>
              <Route path='/resume' element={<Resume />}/>
          </Routes>
        </BrowserRouter>
        <Alert />
      </StrictMode>
    </AlertProvider>
    
  </ChakraProvider>
)
