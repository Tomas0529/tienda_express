import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {PrimerComponente} from './PrimerComponente'
import {SegundoComponente} from './SegundoComponente';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    

    <SegundoComponente/>


  </StrictMode>,
)
