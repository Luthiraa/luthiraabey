import React from 'react'
import './AboutMe.css'
import { useSpring, animated } from 'react-spring';
import pfp from '../assets/img/pfp.jpg'

const FadeInImage = ({ src, alt }) => {
    const fadeIn = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 1000 }, 
    });
  
    return (
      <animated.img
        src={src}
        alt={alt}
        style={fadeIn}
      />
    );
  };

function AboutMe() {
  return (
    <div>
        <div className='container'>
            <div className='about-me'>
            <div className='text'>
        <h1>About Me</h1>
        <p>Hi! My name is Luthira Abeykoon and I am a first year engineering student from Toronto. This website showcases some of my projects and hobbies outside of school, ranging from robotics to photography. For a more formal portfolio, connect with me on LinkedIn. </p>
      </div>
      <div className='pfp'>
        <FadeInImage
          src={pfp}
          alt="Your profile picture"
        />
      </div>
            </div>
            <div className='technologies'>
                <br/>
                <br/>
                <h1>Languages/Technologies</h1>
                <div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height="50" alt="java logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="50" alt="python logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="50" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="50" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="50" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="50" alt="html5 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="50" alt="css3 logo"  />
  <img width="12" />

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" height="50" alt="arduino logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" height="50" alt="dart logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" height="50" alt="flutter logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="50" alt="git logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg" height="50" alt="jetbrains logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="50" alt="vscode logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" height="50" alt="androidstudio logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg" height="50" alt="gradle logo" style={{background:'white',borderRadius:5}} />
  <img width="12" />
  
</div>
                <h1>Still Cooking</h1>

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" height="40" alt="blender logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height="40" alt="firebase logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" height="40" alt="php logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" height="40" alt="vuejs logo"  />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="50" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" height="50" alt="tailwindcss logo" style={{background:"white", borderRadius:5}}  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" height="50" alt="tensorflow logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" height="50" alt="opencv logo"  />
            </div>
        </div>
    </div>
  )
}

export default AboutMe