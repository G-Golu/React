//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import IterableExample from './Nv/objiter.jsx'
import StateExample2 from './Nv/statexamani.jsx'
import StateExample from './Nv/state.jsx'
//import IterableExample from './Nv/objiter.jsx'
createRoot(document.getElementById('root')).render(
  <div>
    
    <StateExample2/> <br />
    <StateExample/> 
    <IterableExample/>    
  </div>
)
// here can multiple file run with one time , should write in 