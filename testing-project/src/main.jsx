//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import StateExamp1 from './Nv/StateExamp1'
//import TableDisp from './Nv/Exercise_1';
//import EmailValidator from './Nv/Excersice_1_Tas-2';
// import ToggleTextVisibility from './Nv/Ex_1_T-3';
// import CharacterCounter from './Nv/Ex_1_T-4';
 //import LmsLearn from './Nv/test';
//import ListComponent from './Nv/useeffectclass';
import ImageCarousel from './Nv/imagechanger'
//import App from './App.jsx'
//import IterableExample from './Nv/objiter.jsx'
//import StateExample2 from './Nv/statexamani.jsx'
//import StateExample from './Nv/state.jsx'
//import IterableExample from './Nv/objiter.jsx'
import CountdownTimer from './Nv/count_down.jsx'
createRoot(document.getElementById('root')).render(
  <div>
    
   {/*  <StateExample2/> <br /> */}
   {/*  <StateExample/> */}
   {/*  <IterableExample/>    */}
   {/* <StateExamp1/> */}

   {/*<TableDisp/> */}
      {/*<EmailValidator/> */}
   {/*<ToggleTextVisibility/>*/}
   {/*<CharacterCounter/>*/}
   {/*<LmsLearn/>*/}
   {/*<ListComponent/>*/}
   <ImageCarousel/> 
   <CountdownTimer/>

  
  
  </div>
)
// here can multiple file run with one time , should write in 