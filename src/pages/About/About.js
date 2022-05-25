import '../App/App.css';

export default function About() {

    return (
        <div>

            <div id="aboutTitle">
                <h1> Meet the Team </h1>
            </div>
            
            <div className="team"> 
                
                <div id="columnOneTeam">
                    <div className='teamMember-container'>
                        <div className='teamMember-name'>
                            <img src = './images/About/mindy.png' alt="Mindy"/>
                        </div>

                        <div className='teammember-text'>
                            <h2> Mindy Miller </h2> 
                            <p> Project Manager </p>
                            <p> Front-End CSS </p>
                            <a href="https://github.com/mmillerks"> Github : mmillerks</a>
                        </div>
                    </div>
                    
                    <div className='teamMember-container'>
                        <div className='teamMember-name'>
                            <img src = './images/About/moses.jpeg' alt="Moses"/>
                        </div>
                        
                        <div className='teammember-text'>
                            <h2> Moses Burkhart </h2>
                            <p> GIT Czar </p>
                            <a href="https://github.com/mosesb1"> Github : mosesb1 </a>
                        </div>
                    </div>
                    
                    <div className='teamMember-container'>
                        <div className='teamMember-name'>
                            <img src = './images/About/orlando.jpg' alt="Orlando"/>
                        </div>
                        
                        <div className='teammember-text'>
                            <h2> Orlando Valadez </h2>
                            <p> Front-End </p>
                            <a href="https://github.com/Orlandouchiha425"> Github: Orlandouchiha425</a> 
                        </div>
                        
                    </div>
                </div>

                <div id="columnOneTeam">
                    <div className='teamMember'>
                        <img src='./images/About/ashley.jpg' alt='Ashley'/>
                        <h2> Ashley Webb </h2>
                        <p> Front-End </p>
                        <a href="https://github.com/ashleywebb"> Github : ashleywebb </a>
                    </div>
                
                    <div className='teamMember'>
                        <img src='./images/About/roy-pic.jpg' alt='Roy'/>
                        <h2> Roy Daniel </h2>
                        <p> Full-Stack </p>
                        <a href="https://github.com/fxcircus"> Github : fxcircus </a>
                    </div>
                
                    <div className='teamMember'>
                        <img src='./images/About/damon.jpg' alt='Damon'/>
                        <h2> Damon Fung</h2>
                        <p> Back-End </p>
                        <a href="https://github.com/dfung003"> Github : dfung003</a>
                    </div>
                </div>

                <div id="columnOneTeam">
                    
                    <div className='teamMember'>
                        <img src='./images/About/Trevor.jpg' alt="Trevor"/>
                        <h2> Trevor Whitehurst </h2>
                        <p> Full Stack </p>
                        <a href="https://github.com/trevorw1990"> Github : trevorw1990 </a>
                    </div>

                    <div className='teamMember'>
                        <img src='./images/About/jonathan.jpg' alt="Jonathan"/>
                        <h2> Jonathan Suarez </h2>
                        <p> Back-End </p>
                        <a href="https://github.com/jonsuarez92"> Github : jonsuarez92 </a>
                    </div>
              
                    <div className='teamMember'>
                        <img src="./images/About/kajsa.jpeg" alt="Kajsa"/>
                        <h2> Kajsa Brown </h2>
                        <p> UX Designer </p> 
                        <a href="https://www.kajsabrown.com/"> Kajsa's Website</a>
                    </div>
                </div>

                <div id="columnOneTeam">
                    
                    <div className='teamMember'>
                        <img src="./images/About/austin.jpeg" alt="Austin"/>
                        <h2> Austin O'Brien </h2> 
                        <p> UX Designer </p>
                        <a href="https://www.obrienmakes.com/"> Austin's Website </a>
                    </div>
                    
                    <div className='teamMember'>
                        <img src="./images/About/sean.jpeg" alt="Sean"/>
                        <h2> Sean O'Brien </h2>
                        <p> General Assembly</p>
                        <p> Instructional Assistant </p>
                    </div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

