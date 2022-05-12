import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from '../Homepage';

export default function App() {
  const [user,setUser] = useState()


  return (
    <div className = "App">
     
     <Routes>
      {
        user?
        <>
        
        <Route path='/' element={<HomePage />} />
        
        </>
        :
        <Route path='/' element={<HomePage/>}/>

      }


     </Routes>
    </div>
  );
}

