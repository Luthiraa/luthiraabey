import * as React from 'react';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './GalleryRevamped.css';
import img1 from '../assets/gallery/img1.jpg';
import img2 from '../assets/gallery/img2.jpg';
import img3 from '../assets/gallery/img3.jpg';
import img4 from '../assets/gallery/img4.jpg';
import img5 from '../assets/gallery/img5.jpg';
import img6 from '../assets/gallery/img6.jpg';
import img7 from '../assets/gallery/img7.jpg';
import img8 from '../assets/gallery/img8.jpg';
import img9 from '../assets/gallery/img9.jpg';
import img10 from '../assets/gallery/img10.jpg';
import img11 from '../assets/gallery/img11.jpg';
import img12 from '../assets/gallery/img12.jpg';
import img13 from '../assets/gallery/DSC_0025-min.jpg'
import img14 from '../assets/gallery/DSC_0260-min.jpg'
import img15 from '../assets/gallery/DSC_0559-min.jpg'
import img16 from '../assets/gallery/DSC_0592-min.jpg'
import img17 from '../assets/gallery/DSC_0885-min.jpg'
import img18 from '../assets/gallery/DSC_1099-min.jpg'
import img19 from '../assets/gallery/DSC_1437-min.jpg'
import img20 from '../assets/gallery/DSC_2284-min.jpg'
import img21 from '../assets/gallery/DSC_2364-min.jpg'
import img22 from '../assets/gallery/DSC_2867-min.jpg'
import img23 from '../assets/gallery/DSC_2870-min.jpg'
import img24 from '../assets/gallery/DSC_4281-min.jpg'
import img26 from '../assets/gallery/DSC_5278-Edit-min.jpg'
import img27 from '../assets/gallery/DSC_5310-min.jpg'
import img28 from '../assets/gallery/DSC_5319-min.jpg'
import img29 from '../assets/gallery/DSC_5463-min.jpg'
import img30 from '../assets/gallery/DSC_5532-min.jpg'
import img31 from '../assets/gallery/DSC_5557-min.jpg'
import img32 from '../assets/gallery/DSC_6207-min.jpg'
import img33 from '../assets/gallery/DSC_6289-min.jpg'
import img34 from '../assets/gallery/DSC_6639-min.jpg'
import img35 from '../assets/gallery/DSC_6775-min.jpg'
import img36 from '../assets/gallery/DSC_7330-Edit-min.jpg'
import img37 from '../assets/gallery/DSC_7932-min.jpg'
import img38 from '../assets/gallery/DSC_7940-min.jpg'
import img39 from '../assets/gallery/DSC_7960-min.jpg'
import img40 from '../assets/gallery/DSC_8082-min.jpg'
import img41 from '../assets/gallery/DSC_8233-min.jpg'
import img42 from '../assets/gallery/DSC_8980-min.jpg'
import img43 from '../assets/gallery/DSC_8984-min.jpg'
import img44 from '../assets/gallery/DSC_9046-min.jpg'
import img45 from '../assets/gallery/DSC_9070-min.jpg'
import img46 from '../assets/gallery/DSC_9118-min.jpg'
import img47 from '../assets/gallery/DSC_9410-min.jpg'
import img48 from '../assets/gallery/DSC_9829-min.jpg'
import img49 from '../assets/gallery/DSC_9910-min.jpg'
import img50 from '../assets/gallery/DSC_9929-min.jpg'



export default function ImageGallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const itemData = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
    img45,
    img46,
    img47,
    img48,
    img49,
    img50,
    
  ];

  const trackRef = useRef();

  useEffect(() => {
    const track = trackRef.current;

    const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);
    const handleOnUp = () => {
      track.dataset.mouseDownAt = '0';
      track.dataset.prevPercentage = track.dataset.percentage;
    };
    const handleOnMove = (e) => {
      if (track.dataset.mouseDownAt === '0') return;
    
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth / 2;
    
      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained =
        parseFloat(track.dataset.prevPercentage) + percentage;
      const nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, 0),
        -100
      );
    
      track.dataset.percentage = nextPercentage;
    
      track.style.transition = 'transform 1s ease';
      track.style.transform = `translate(${nextPercentage}%, -50%)`;
    
      for (const image of track.getElementsByClassName('image')) {
        image.style.transition = 'object-position 1s ease'; 
        image.style.objectPosition = `${100 + nextPercentage}% center`;
      }
    };
    window.onmousedown = (e) => handleOnDown(e);
    window.ontouchstart = (e) => handleOnDown(e.touches[0]);
    window.onmouseup = (e) => handleOnUp(e);
    window.ontouchend = (e) => handleOnUp(e.touches[0]);
    window.onmousemove = (e) => handleOnMove(e);
    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
  }, []);

  return (
    <div>
      
      <div
        id="image-track"
        ref={trackRef}
        data-mouse-down-at="0"
        data-prev-percentage="0"
      >
        {itemData.map((imageUrl, index) => (
          <img
            key={index}
            className="image"
            src={imageUrl}
            draggable="false"
          />
        ))}
      </div>
    </div>
  );
}
