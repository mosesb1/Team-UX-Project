import { useState,useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from '../Homepage/Homepage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import AuthPage from '../AuthPage/AuthPage';
import { getUser } from '../../utilities/api/users/users-service';
import ProfilePage from '../ProfilePage/ProfilePage';


export default function About() {

    return (
        <div>
            <h1> Meet the Team </h1>
            <div className="team">
                <div>
                    <h2> Mindy Miller </h2> 
                    <img src = './images/About/mindy.png' alt="Mindy"/>
                    <p> Project Manager </p>
                    <p> Front-End CSS </p>
                    <p href="https://github.com/mmillerks"> Github : mmillerks</p> 
                </div>
                <div>
                    <h2> Moses Burkhart </h2>
                    <img src = './images/About/moses.jpeg' alt="Moses"/>
                    <p> GIT Czar </p>
                    <a href="https://github.com/mosesb1"> Github : mosesb1 </a>
                </div>
                <div>
                    <h2> Orlando Valadez </h2>
                    {/* <img src/> */}
                    <p> Front-End </p>
                    {/* <a href=""> Github</a> */}
                </div>
                <div>
                    <h2> Ashley Webb </h2>
                    <img src='./images/About/0E7A916 (1).JPG' alt='Ashley'/>
                    <p> Front-End </p>
                    <a href="https://github.com/ashleywebb"> Github : ashleywebb </a>
                </div>
                <div>
                    <h2> Roy Daniel </h2>
                    <img src='./images/About/roy-pic.jpg' alt='Roy'/>
                    <p> Full-Stack </p>
                    <a href="https://github.com/fxcircus"> Github : fxcircus </a>
                </div> 
                <div>
                    <h2> Damon Fung</h2>
                    <img src='./images/About/Damon Photo.jpg' alt='Damon'/>
                    <p> Back-End </p>
                    <a href="https://github.com/dfung003"> Github : dfung003</a>
                </div>
                <div>
                    <h2> Trevor Whitehurst </h2>
                    <img src='./images/About/Trevor.png' alt="Trevor"/>
                    <p> Full Stack </p>
                    <a href="https://github.com/trevorw1990"> Github : trevorw1990 </a>
                </div>
                <div>
                    <h2> Jonathan Suarez </h2>
                    <p> Back-End </p>
                    <a href=""> Github : </a>
                </div>
                <div>
                    <h2> Kajsa Brown </h2>
                    <img src="./images/About/kajsa.jpeg" alt="Kajsa"/>
                    <p> UX Designer </p> 
                </div>
                <div>
                    <h2> Austin O'Brien </h2> 
                    <img src="./images/About/austin.jpeg" alt="Austin"/>
                    <p> UX Designer </p>
                </div>
                <div>
                    <h2> Sean O'Brien </h2>
                    <img src="./images/About/sean.jpeg" alt="Sean"/>
                    <p> Instructional Assistant </p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

