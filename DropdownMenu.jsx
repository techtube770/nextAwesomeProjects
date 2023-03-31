import React, { useState } from "react";
import {IoMdNotificationsOutline} from 'react-icons/io'
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { CiLogout } from 'react-icons/ci';
import {CiSettings} from 'react-icons/ci'
import {RiEditBoxLine} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'

function DropdownMenu() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`navigation${isActive ? " active" : ""}`}>
      <div className="userBx">
        <div className="imgBx">
          <img src="/img/user2.jpg" alt="user" />
        </div>
        <p className="username">Jully smith</p>
      </div>
      <div className="menuToggle" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="menu">
        <li>
          <a href="/"><CgProfile/>My profile</a>
        </li>
        <li>
          <a href="/"><RiEditBoxLine/> Edit</a>
        </li>
        <li>
          <a href="/"><IoMdNotificationsOutline/> Notifications</a>
        </li>
        <li>
          <a href="/"><CiSettings/> Settings</a>
        </li>
        <li>
          <a href="/"><IoIosHelpCircleOutline/> Help & support</a>
        </li>
        <li>
          <a href="/"><CiLogout/> Logout</a>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;

// ----------------------------------------------Type Script code start---------------------------

// import React, { useState } from "react";
// // import "../Style/DropdownMenuStyle.css";

// function DropdownMenu(): JSX.Element {
//   const [isActive, setIsActive] = useState<boolean>(false);

//   const handleClick = (): void => {
//     setIsActive(!isActive);
//   };

//   return (
//     <div className={`navigation${isActive ? " active" : ""}`}>
//       <div className="userBx">
//         <div className="imgBx">
//           <img src="/img/user.jpg" alt="user" />
//         </div>
//         <p className="username">Jully smith</p>
//       </div>
//       <div className="menuToggle" onClick={handleClick}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//       <ul className="menu">
//         <li>
//           <a href="/">My profile</a>
//         </li>
//         <li>
//           <a href="/">Edit</a>
//         </li>
//         <li>
//           <a href="/">Notifications</a>
//         </li>
//         <li>
//           <a href="/">Settings</a>
//         </li>
//         <li>
//           <a href="/">Help &amp; support</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default DropdownMenu;

// ----------------------------------------------Type Script code css---------------------------




// --------------------------------------------Css file code start-----------------------------------

// @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

// *{
// margin: 0;
// padding: 0;
// box-sizing: border-box;
// font-family: 'Ubuntu', sans-serif;
// }
// body {
// min-height: 100vh;
// background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
// }

// .navigation {
//   position: fixed;
//   top: 20px;
//   right: 20px;
//   width: 120px;
//   height: 60px;
//   background: #fff;
//   box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
//   display: flex;
//   justify-content: space-between;
//   transition: height 0.5s, width 0.5s;
//   transition-delay: 0s, 0.75s;
//   overflow: hidden;
//   }
  
//   .navigation.active {
//   width: 300px;
//   height: 400px;
//   transition: width 0.5s, height 0.5s;
//   transition-delay: 0s, 0.75s;
//   }
  
//   .navigation .userBx {
//   position: relative;
//   width: 60px;
//   height: 60px;
//   background: #fff;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   transition: 0.5s;
//   transition-delay: 0.5s;
//   }
  
//   .navigation.active .userBx {
//   width: calc(100% - 60px);
//   transition-delay: 0s;
//   }
  
//   .navigation .userBx .username {
//   white-space: nowrap;
//   color: #555;
//   font-size: 1.1em;
//   }
  
//   .navigation .userBx .imgBx {
//   position: relative;
//   min-height: 60px;
//   height: 60px;
//   background: #000;
//   border-radius: 50%;
//   border: 10px solid #fff;
//   overflow: hidden;

//   }
  
//   .navigation .userBx .imgBx img{
//   position: relative;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   }
  
//   .navigation .menuToggle {
//   position: relative;
//   width: 60px;
//   height: 60px;
//       cursor: pointer;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//   }
//   .navigation .menuToggle::before{
//       content: '';
//       position: absolute;
//       width: 32px;
//       height: 2px;
//       background: #555;
//       transform: translateY(-10px);
//       box-shadow: 0 10px #555;
//       transition: 0.5s;
//   }
  
//   .navigation .menuToggle::after{
//       content: '';
//       position: absolute;
//       width: 32px;
//       height: 2px;
//       background: #555;
//       transform: translateY(10px);
//       transition: 0.5s;
//   }
  
//   .navigation.active .menuToggle::before{
//       transform: translateY(0px) rotate(45deg);
//       box-shadow: 0 0 #555;
//   }
//   .navigation.active .menuToggle::after{
//       transform: translateY(0px) rotate(-45deg);
//   }
  
//   .menu{
    
//       position: absolute;
//       width: 100%;
//       height: calc(100% - 60px);
//       margin-top: 60px;
//       padding: 20px;
//       border-top: 1px solid rgba(0, 0, 0, 0.1);
//   }
//   .menu li{
//       list-style: none;
//   }
//   .menu li a{
//       display: flex;
//       align-items: center;
//       gap: 10px;
//       margin: 20px 0;
//       font-size: 1em;
//       text-decoration: none;
//       color: #555;
//       margin: 20px 0;
//   }
  
//   .menu li a:hover{
//       color: #4e65ff;
//   }
  
//   .menu li a ion-icon{
//       font-size: 1.5em;
//   } 
 
// --------------------------------------------Css file code end-----------------------------------