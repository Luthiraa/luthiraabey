import React from 'react'
import './MyJourney.css'
import DNB from '../assets/img/DNBlogo.png'
import UofT from '../assets/img/UofT.png'
import devOld from '../assets/img/devOld.png';
import devNew from '../assets/img/devNew.png';
import UTMIST from '../assets/img/bluebottom.svg';
import devTeamPic from '../assets/img/devTeamPic.jpg';
import ssa from '../assets/img/ssa.png'
import crew from '../assets/img/crew.png'
import blze from '../assets/img/blze.png'
import swimming from '../assets/img/swimming.png'
import wrestling from '../assets/img/wrestling.png'
import wrestling_team from '../assets/img/wrestling_team.png'
import eightball from '../assets/img/8ball.png'
function MyJourney() {
    return (
        <div>
            <hr/>
            <h4>Education</h4>
            <div className='uni-section'>
                <div className='text'>
                    <h1>University Of Toronto - Engineering</h1>
                    <h2>September 2023 - June 2027 </h2>
                    <p>Over the span of 2023 to 2027, I will be pursuing Computer Engineering at the University Of Toronto where I'll engage in a rigourous curriculum and a collaborative atmosphere, aiming to become a skilled engineer capable of making a significant impact in the technology field.</p>
                </div>
                <div>
                    <img src={UofT} />
                </div>
            </div>
            <div className='hs-section'>
                <div className='text'>
                    <h1>Dr. Norman Bethune C.I.</h1>
                    <h2>September 2019 - June 2023 </h2>
                    <p>From 2019 to 2023, my high school journey was transformative, filled with meaningful friendships, personal growth, and valuable preparation for the next chapter of life. I'm grateful for the knowledge gained and the memories made during this time.</p>
                    <h3>Extracurriculars: </h3>
                    <ul>
                        <li>
                            <span>First Tech Challenge Robotics:</span>
                            <span class="right-date">2021 - 23</span>
                        </li>
                        <li>
                            <span>Scarborough STEM Alliance:</span>
                            <span class="right-date">2022 - 23</span>
                        </li>
                        <li>
                            <span>A/V Team:</span>
                            <span class="right-date">2019 - 23</span>
                        </li>

                    </ul>
                    <p>Read more down below.</p>
                </div>
                <div>
                    <img src={DNB} />
                </div>
            </div>
            <hr/>
            <h4>Extracurriculars</h4>
            <div className='ECs'>
            <div className='column'>
            <h1>UTMIST - Graphic Designer</h1>
                    <h2>2023-Present</h2>
            <div className="image-container">
                <img src={UTMIST} />
            </div>
            </div>
            <div className='column'>
            <h1>TrackOne Board of Directors</h1>
                    <h2>2023-Present</h2>
            <div className="image-container">
                <img src={eightball} />
            </div>
            </div>
            <div className='column'></div>
  
                </div>
                
            <div className='robot-section'>
                <div className='column'>
                    <h1>Devolotics - Freight Frenzy</h1>
                    <h2>2021-22</h2>
                    <h5>FIRST TECH CHALLENGE - Rookie sesaon</h5>
                    <div className="image-container">
                        <img src={devOld} />
                    </div>
                    <p>The "Freight Frenzy" season in FTC immerses teams in a high-energy robotics competition where they create and operate robots to tackle intricate challenges.This fully virtual season allowed me to develop my engineeing skills which include programming, problem solving, and critial thinking whilst enhancing my transferrable skills.</p>
                    <h4>Season awards:</h4>
                    <ul>
                        <li>Connect Award 2nd - Provincials</li>
                        <li>Top Ranked - Qualifier</li>
                        <li>Inspire Award 2nd - Qualifier</li>
                        <li>Innovate Award - Qualifier </li>
                        <li>Design Award - Qualifier</li>
                    </ul>
                    <br></br>
                    <p>To the late night recording sessions and future success.</p>
                    <div className="image-container">
                        <img src={crew} alt="Dev Team" className="centered-image" style={{ height: 150 }} />
                    </div>

                </div>
                <div className='column'>
                    <h1>Devolotics - Power Play</h1>
                    <h2>2022-23</h2>
                    <h5>FIRST TECH CHALLENGE - Second Season: Ontario Champion</h5>
                    <div className="image-container">
                        <img src={devNew} />
                    </div>
                    <p>The FTC Powerplay season featured innovative robots competing in high-energy challenges, showcasing the next generation of engineering and technology enthusiasts. This year we were able to make it to the FIRST championships hosted in Houston, Texas. I was able to expand my robotics knowledge and work with new technologies such as image detection, and motion profiles.</p>
                    <h4>Season Awards:</h4>
                    <ul>
                        <li>Inspire Award 1st - Provincials (Qualified for Houston)</li>
                        <li>Inspire Award 2nd - Qualifiers</li>
                        <li>Motivate Award- Qualifiers</li>
                        <li>Finalist Alliance - Qualifiers</li>
                        <li>Connect Award</li>
                    </ul>
                    <p>I'm glad to have been apart of this incredible group of individuals. Devolotics for life.</p>
                    <div className="image-container">
                        <img src={devTeamPic} alt="Dev Team" className="centered-image" style={{ height: 150 }} />
                    </div>

                </div>
                <div className='column'>
                    <h1>Scarborough STEM Alliance</h1>
                    <h2>2022-Present</h2>
                    <h5>Co-founder/Co-president of STEM nonprofit</h5>
                    <div className="image-container">
                        <img src={ssa} />
                    </div>
                    <p>During our 2022-23 robotics season, our team founded our very own non-profit organization: Scarborough STEM Alliance (SSA), with the goal of giving everyone a chance at STEM education. Although we are based out of Scarborough, we are expanding rapidly.</p>
                    <br />
                    <h4>Overview:</h4>
                    <ul style={{padding:20}}>
                        <li>Co-founder/Co-President: I am proud to be a co-founder and co-president of SSA, dedicated to bringing STEM education and opportunities to our community. My commitment to this role reflects my strong belief in the transformative power of STEM fields and their potential to shape young minds and the future.</li>
                        <li>Organized and Led Python/EV3 Workshops for +600 Students at Local Schools:
                            One of the most fulfilling aspects of my journey has been organizing and leading hands-on Python and EV3 workshops for more than 600 students across local schools. It's been incredible to witness the enthusiasm and curiosity of these students as they delve into coding and robotics. These workshops aim not only to teach practical skills but also to ignite a lifelong passion for learning.</li>
                        <li>Setting Organization Goals/Missions:
                            Shaping the direction of the Scarborough STEM Alliance has been a rewarding challenge. From the beginning, I've been deeply involved in setting our organization's goals and defining our mission. Providing a clear vision has been instrumental in guiding our efforts and ensuring that our initiatives align with our core values of accessibility and excellence in STEM education.</li>
                    </ul>

                </div>
            </div>
          
            <div className='ECs'>
                <div className='column'>
                    <h1>Swimming</h1>
                    <h2>2012-Present</h2>
                    <h5>Competitive Swimming - Lifeguard</h5>
                    <div className="image-container">
                        <img src={swimming} />
                    </div>
                    <h4>Overview:</h4>
                    <p>From a young age, I have always loved swimming. Starting in the YMCA in 2012 to reciveing my Bronze Cross at the age of 12, which is when I decided to do swimming competitively. Below are some of my swimming achivements: </p>
                    <ul>
                        <li>Bronze Cross: August 2017</li>
                        <li>Swim Instructor Certification: July 2022</li>
                        <li>National Lifeguard: August 2022</li>
                    </ul>
                    <h6>BCI Swim Team Awards (2022 Spring - City Championships): </h6>
                    <ul>
                        <li>Mens 50m Backstroke - 2nd</li>
                        <li>Mens 100m Backstroke - 2nd</li>
                        <li>Mens 100m Breastroke - 3rd</li>
                        <li>Mens 4x100m Medly Relay - 2nd</li>
                    </ul>
                    <br/>
                </div>
                <div className='column'>
                    <h1>Wrestling</h1>
                    <h2>2019-2023</h2>
                    <h5>Highschool Wrestling Team</h5>
                    <div className="image-container">
                        <img src={wrestling} />
                    </div>
                    <h4>Overview:</h4>
                    <p>During my grade 9 year of highschool, I decided to join the wrestling team. Although I have never done a sport of this caliber or have participated in anything with such high impact, I found this a transformative journey, which allowed me to get into shape, train and persure to win. </p>
                    <h4>The Squad:</h4>
                    <div className="image-container">
                        <img src={wrestling_team} alt="Dev Team" className="centered-image" style={{ height: 150 }} />
                    </div>
                </div>
                <div className='column'>
                    <h1>Audio Visual (A/V)</h1>
                    <h2>2019-2023</h2>
                    <h5>Highschool A/V Team - President</h5>
                    <div className="image-container">
                        <img src={blze} />
                    </div>
                    <h4>Overview:</h4>
                    <p>In 2019, I joined Bethune Blaze, a multimedia audio/visual team leading school productions and events. During my senior year, I had the pleasure of becoming the elected president, which allowed me to hone many of my soft-skills. As a president, I developed new ideas for productions such as the school talent show, as well as transform the visual aspect in terms of photography and videography with my</p>
                </div>
            </div>
        </div>
    )
}

export default MyJourney