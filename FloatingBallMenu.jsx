import React, { useState } from "react";
import {IoMdNotificationsOutline} from 'react-icons/io'
import {AiOutlineHome} from 'react-icons/ai'
import { CiLogout } from 'react-icons/ci';
import {BsCamera} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'

function FloatingBallMenu() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const navItems = [
    { text: "Home", icon: <AiOutlineHome/> },
    { text: "Profile", icon:  <CgProfile/>},
    { text: "Notification", icon: <IoMdNotificationsOutline/> },
    { text: "Camera", icon: <BsCamera/> },
    { text: "Logout", icon: <CiLogout/> },
  ];

  return (
    <div className="navigation">
      <ul>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`list ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleItemClick(index)}
          >
            <a href="#">
              <span className="icon">
                <span className="ion-icon">{item.icon}</span>
              </span>
              <span className="text">{item.text}</span>
            </a>
          </li>
        ))}
        <div className="indicator"></div>
      </ul>
    </div>
  );
}

export default FloatingBallMenu;


// ------------------------------------  Magic menu typescript code start---------------------------------------

// import React, { useState } from "react";
// import { IoMdNotificationsOutline } from 'react-icons/io';
// import { AiOutlineHome } from 'react-icons/ai';
// import { CiLogout } from 'react-icons/ci';
// import { BsCamera } from 'react-icons/bs';
// import { CgProfile } from 'react-icons/cg';

// function Magicmenu(): JSX.Element {
//   const [activeIndex, setActiveIndex] = useState<number>(0);

//   const handleItemClick = (index: number): void => {
//     setActiveIndex(index);
//   };

//   const navItems = [
//     { text: "Home", icon: <AiOutlineHome/> },
//     { text: "Profile", icon: <CgProfile/> },
//     { text: "Notification", icon: <IoMdNotificationsOutline/> },
//     { text: "Camera", icon: <BsCamera/> },
//     { text: "Logout", icon: <CiLogout/> },
//   ];

//   return (
//     <div className="navigation">
//       <ul>
//         {navItems.map((item, index) => (
//           <li
//             key={index}
//             className={`list ${index === activeIndex ? "active" : ""}`}
//             onClick={() => handleItemClick(index)}
//           >
//             <a href="#">
//               <span className="icon">
//                 <span className="ion-icon">{item.icon}</span>
//               </span>
//               <span className="text">{item.text}</span>
//             </a>
//           </li>
//         ))}
//         <div className="indicator"></div>
//       </ul>
//     </div>
//   );
// }

// export default Magicmenu;


// ------------------------------------  Magic menu typescript code end---------------------------------------



// ------------------------------------------- Css file code start-------------------------

// *{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: 'Poppins', sans-serif;
// }

// :root {
//     --clr : #d9e7ff;
// }

// body{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     min-height: 100vh;
//     background: var(--clr);
// }

// .navigation{
//     position: relative;
//     width: 400px;
//     height: 70px;
//     background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 10px;
   
// }

// .navigation ul{
//     display: flex;
//     width: 350px;
// }

// .navigation ul li{
//     position: relative;
//     list-style: none;
//     width: 70px;
//     /* height: 70px; */
//     z-index: 1;
// }

// .navigation ul li a{
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     width: 100%;
//     text-align: center;
//     font-weight: 500;
// }
// .navigation ul li a .icon{
//     position: relative;
//     display: block;
//     line-height: 75px;
//     font-size: 1.5em;
//     text-align: center;
//     transition: 0.5s;
//     color: white ;
//     /* background: linear-gradient(90deg, #FDBB2D 0%, #3A1C71 100%); */
   
// }
// .navigation ul li.active a .icon{
//     transform: translateY(-32px);
// }
// .navigation ul li a .text{
//     position: absolute;
//     color: white;
//     font-weight: 400;
//     font-size: 0.75em;
//     letter-spacing: 0.05em;
//     transition: 0.5s;
//     opacity: 0;
//     transform: translateY(20px);
// }

// .navigation ul li.active a .text{
//     opacity: 1;
//     transform: translateY(10px);
// }
// .indicator{
//     position: absolute;
//     top: -50%;
//     width: 70px;
//     height: 70px;
//     background: linear-gradient(90deg, #efd5ff 0%, #515ada 100%);;
//     border-radius: 50%;
//     border: 6px solid var(--clr);
//     transition: 0.5s;
// }
// .indicator::before{
//     content: '';
//     position: absolute;
//     top: 50%;
//     left: -22px;
//     width: 20px;
//     height: 20px;
//     background: transparent;
//     border-top-right-radius: 20px;
//     box-shadow: 1px -10px 0 0 var(--clr);
// }

// .indicator::after{
//     content: '';
//     position: absolute;
//     top: 50%;
//     right: -22px;
//     width: 20px;
//     height: 20px;
//     background: transparent;
//     border-top-left-radius: 20px;
//     box-shadow: -1px -10px 0 0 var(--clr);
// }


// .navigation ul li:nth-child(1).active ~ .indicator
// {
//     transform: translateX(calc(70px * 0));
// }
// .navigation ul li:nth-child(2).active ~ .indicator
// {
//     transform: translateX(calc(70px * 1));
// }
// .navigation ul li:nth-child(3).active ~ .indicator
// {
//     transform: translateX(calc(70px * 2));
// }
// .navigation ul li:nth-child(4).active ~ .indicator
// {
//     transform: translateX(calc(70px * 3));
// }
// .navigation ul li:nth-child(5).active ~ .indicator
// {
//     transform: translateX(calc(70px * 4));
// }


// ------------------------------------------- Css file code end-------------------------