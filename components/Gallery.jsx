import React from 'react';
import flower1 from '../src/assets/flower1.jpg';
import flower2 from '../src/assets/flower2.jpg';
import flower3 from '../src/assets/flower3.jpg';
import grotto from '../src/assets/grotto.jpg'
import mtl from '../src/assets/mtl.jpg';
import penn from '../src/assets/penninsula.jpg';
function Gallery() {
  return (
    <div className='Gallery'>
            <img src={flower1}/>
            <img src={flower2}/>
            <img src={flower3}/>  
            <img src={mtl}/>  
            <img src={grotto}/>  
            <img src={penn}/> 
          </div>
  )
}

export default Gallery