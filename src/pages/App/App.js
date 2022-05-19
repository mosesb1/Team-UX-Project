import { useState,useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from '../Homepage/Homepage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import AuthPage from '../AuthPage/AuthPage';
import { getUser } from '../../utilities/api/users/users-service';
import ProfilePage from '../ProfilePage/ProfilePage';
import CreateProject from '../CreateProject/CreatProject';
import About from '../About/About';

import './App.css';
export default function App() {
  const [ user, setUser ] = useState(null)


  useEffect(() => {
    setUser(getUser())
  },[])



  return (
    <div className = "App">
     
     <NavBar user={user} setUser={setUser} />
     <Routes>
        <Route path='/signup' element={<AuthPage user={user} setUser={setUser} />}/>
    
        <Route path='/' element={<HomePage user={user} setUser={setUser} />} />
       
        <Route path="/profile/:id" element={<ProfilePage user={user} setUser={setUser} />}/>
    
        <Route path='/create-project' element={<CreateProject user={user} setUser={setUser} />}/>

        <Route path='/about' element={<About />}/>

     </Routes>

     <Footer />
    </div>
  );
}