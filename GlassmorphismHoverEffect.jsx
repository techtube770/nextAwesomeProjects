import React, { useState } from 'react';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { CiLogout } from 'react-icons/ci';
import {CiSettings} from 'react-icons/ci'
import {RiEditBoxLine} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'

function HoverGlassmorphism() {
  const [activeIndex, setActiveIndex] = useState(0);

  function moveIndicator(e) {
    const marker = document.getElementById('marker');
    const links = document.querySelectorAll('ul li');
    const activeLink = links[activeIndex];

    marker.style.left = activeLink.offsetLeft + 'px';
    marker.style.width = activeLink.offsetWidth + 'px';
  }

  function handleMouseover(index) {
    setActiveIndex(index);
  }

  return (
    <div>
      <ul>
        <li className={activeIndex === 0 ? 'active' : ''} onMouseMove={moveIndicator} onMouseOver={() => handleMouseover(0)}>
          <a href="#"><span className="ion-icon"><CgProfile/></span></a>
        </li>
        <li className={activeIndex === 1 ? 'active' : ''} onMouseMove={moveIndicator} onMouseOver={() => handleMouseover(1)}>
          <a href="#"><span className="ion-icon"><RiEditBoxLine/></span></a>
        </li>
        <li className={activeIndex === 2 ? 'active' : ''} onMouseMove={moveIndicator} onMouseOver={() => handleMouseover(2)}>
          <a href="#"><span className="ion-icon"><CiSettings/></span></a>
        </li>
        <li className={activeIndex === 3 ? 'active' : ''} onMouseMove={moveIndicator} onMouseOver={() => handleMouseover(3)}>
          <a href="#"><span className="ion-icon"><CiLogout/></span></a>
        </li>
        <li className={activeIndex === 4 ? 'active' : ''} onMouseMove={moveIndicator} onMouseOver={() => handleMouseover(4)}>
          <a href="#"><span className="ion-icon"><IoIosHelpCircleOutline/></span></a>
        </li>
        <div id="marker"></div>
      </ul>
    </div>
  );
}

export default HoverGlassmorphism;



// ----------------------------------TypeScript Code Start--------------------------------------

// import React, { useState } from 'react';
// import { IoIosHelpCircleOutline } from 'react-icons/io';
// import { CiLogout } from 'react-icons/ci';
// import { CiSettings } from 'react-icons/ci';
// import { RiEditBoxLine } from 'react-icons/ri';
// import { CgProfile } from 'react-icons/cg';

// function HoverGlassmorphism(): JSX.Element {
//   const [activeIndex, setActiveIndex] = useState<number>(0);

//   function moveIndicator(e: React.MouseEvent<HTMLLIElement>) {
//     const marker = document.getElementById('marker');
//     const links = document.querySelectorAll('ul li');
//     const activeLink = links[activeIndex] as HTMLElement;

//     if (marker && activeLink) {
//       marker.style.left = activeLink.offsetLeft + 'px';
//       marker.style.width = activeLink.offsetWidth + 'px';
//     }
//   }

//   function handleMouseover(index: number) {
//     setActiveIndex(index);
//   }

//   return (
//     <div>
//       <ul>
//         <li
//           className={activeIndex === 0 ? 'active' : ''}
//           onMouseMove={moveIndicator}
//           onMouseOver={() => handleMouseover(0)}
//         >
//           <a href="#">
//             <span className="ion-icon">
//               <CgProfile />
//             </span>
//           </a>
//         </li>
//         <li
//           className={activeIndex === 1 ? 'active' : ''}
//           onMouseMove={moveIndicator}
//           onMouseOver={() => handleMouseover(1)}
//         >
//           <a href="#">
//             <span className="ion-icon">
//               <RiEditBoxLine />
//             </span>
//           </a>
//         </li>
//         <li
//           className={activeIndex === 2 ? 'active' : ''}
//           onMouseMove={moveIndicator}
//           onMouseOver={() => handleMouseover(2)}
//         >
//           <a href="#">
//             <span className="ion-icon">
//               <CiSettings />
//             </span>
//           </a>
//         </li>
//         <li
//           className={activeIndex === 3 ? 'active' : ''}
//           onMouseMove={moveIndicator}
//           onMouseOver={() => handleMouseover(3)}
//         >
//           <a href="#">
//             <span className="ion-icon">
//               <CiLogout />
//             </span>
//           </a>
//         </li>
//         <li
//           className={activeIndex === 4 ? 'active' : ''}
//           onMouseMove={moveIndicator}
//           onMouseOver={() => handleMouseover(4)}
//         >
//           <a href="#">
//             <span className="ion-icon">
//               <IoIosHelpCircleOutline />
//             </span>
//           </a>
//         </li>
//         <div id="marker"></div>
//       </ul>
//     </div>
//   );
// }

// export default HoverGlassmorphism;


// ----------------------------------TypeScript Code End--------------------------------------


/* -------------------css styling start------------------------------------- */

// *{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }
// body{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     min-height: 100vh;
//     background: #1e2759;
// }
// ul{
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 10px;
//     box-shadow: 0 5px 25px rgba(0,0,0,0.25);
//     list-style: none;
// }
// ul li a{
//     position: relative;
//     color: #fff;
//     text-decoration: none;
//     display: inline-block;
//     padding: 20px 30px;
//     z-index: 1000;
//     backdrop-filter: blur(15px);
// }
// ul li a .ion-icon{
//     font-size: 2.5em;
//     pointer-events: none;
//     opacity: 0.25;
//     transition: 0.25s;
// }
// ul li.active a .ion-icon{
//     opacity: 1;
// }

// #marker{
//     position: absolute;
//     top: 0;
//     transition: 0.5s;
//     z-index: 1;
// }
// #marker::before{
//     content: "";
//     position: absolute;
//     top: -10px;
//     left: 50%;
//     transform: translate(-50%);
//     width: 50px;
//     height: 40px;
//     border-radius: 8px;
    
// }

// ul li:nth-child(1).active ~ #marker::before{
//     background: #5da6ff;
//     box-shadow: 0 0 15px #5da6ff, 0 0 30px #5da6ff, 0 0 45px #5da6ff, 0 0 60px #5da6ff;
// }
// ul li:nth-child(2).active ~ #marker::before{
//     background: #ff0;
//     box-shadow: 0 0 15px #ff0, 0 0 30px #ff0, 0 0 45px #ff0, 0 0 60px #ff0;
// }
// ul li:nth-child(3).active ~ #marker::before{
//     background: #0f0;
//     box-shadow: 0 0 15px #0f0, 0 0 30px #0f0, 0 0 45px #0f0, 0 0 60px #0f0;
// }
// ul li:nth-child(4).active ~ #marker::before{
//     background: #df2fff;
//     box-shadow: 0 0 15px #df2fff, 0 0 30px #df2fff, 0 0 45px #df2fff, 0 0 60px #df2fff;
// }
// ul li:nth-child(5).active ~ #marker::before{
//     background: #ff308f;
//     box-shadow: 0 0 15px #ff308f, 0 0 30px #ff308f, 0 0 45px #ff308f, 0 0 60px #ff308f;
// }

/* -------------------css styling end------------------------------------- */
