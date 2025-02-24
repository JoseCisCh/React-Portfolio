import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { faSwift,faLinkedin, faGithub  } from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import { background, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AlertProvider } from './context/alertContext.tsx';
import Alert from './components/Alert.tsx';

library.add(faSwift, faLinkedin, faGithub );

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
        <App />
        <Alert />
      </StrictMode>
    </AlertProvider>
    
  </ChakraProvider>
)
