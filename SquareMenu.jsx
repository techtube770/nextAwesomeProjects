import React, { useState } from 'react';
import {IoMdNotificationsOutline} from 'react-icons/io'
import {AiOutlineHome} from 'react-icons/ai'
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { CiLogout } from 'react-icons/ci';
import {CiSettings} from 'react-icons/ci'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {BsCamera} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {RiEditBoxLine} from 'react-icons/ri'

function Navigation() {
  const [isActive, setIsActive] = useState(false);

  const handleNavigationClick = () => {
    setIsActive(!isActive);
  };

  const icons = [
    { i: 0, x: -1, y: 0, icon : <AiOutlineHome/> },
    { i: 1, x: 1, y: 0, icon : <IoMdNotificationsOutline/> },
    { i: 2, x: 0, y: -1, icon : <IoIosHelpCircleOutline/> },
    { i: 3, x: 0, y: 1, icon : <CiLogout/> },
    { i: 4, x: 1, y: 1, icon : <CiSettings/> },
    { i: 5, x: -1, y: -1, icon : <BiMessageRoundedDots/> },
    { i: 6, x: 0, y: 0, icon : <BsCamera/> },
    { i: 7, x: -1, y: 1, icon : <CgProfile/> },
    { i: 8, x: 1, y: -1, icon : <RiEditBoxLine/> }
  ];

  return (
    <div className={`navigation${isActive ? ' active' : ''}`} onClick={handleNavigationClick}>
      {icons.map(icon => (
        <span
          key={icon.i}
          style={{
            '--i': icon.i,
            '--x': icon.x,
            '--y': icon.y
          }}
        >
          <ion-icon name="ellipsis-horizontal">{icon.icon}</ion-icon>
        </span>
      ))}
    </div>
  );
}

function SquareMenu() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
  
}

export default SquareMenu;



// ----------------------------type script code start-------------------------

// import React, { useState } from 'react';
// import {IoMdNotificationsOutline} from 'react-icons/io'
// import {AiOutlineHome} from 'react-icons/ai'
// import { IoIosHelpCircleOutline } from 'react-icons/io';
// import { CiLogout } from 'react-icons/ci';
// import {CiSettings} from 'react-icons/ci'
// import {BiMessageRoundedDots} from 'react-icons/bi'
// import {BsCamera} from 'react-icons/bs'
// import {CgProfile} from 'react-icons/cg'
// import {RiEditBoxLine} from 'react-icons/ri'

// interface Icon {
//   i: number;
//   x: number;
//   y: number;
//   icon: JSX.Element;
// }

// function Navigation() {
//   const [isActive, setIsActive] = useState<boolean>(false);

//   const handleNavigationClick = () => {
//     setIsActive(!isActive);
//   };

//   const icons: Icon[] = [
//     { i: 0, x: -1, y: 0, icon : <AiOutlineHome/> },
//     { i: 1, x: 1, y: 0, icon : <IoMdNotificationsOutline/> },
//     { i: 2, x: 0, y: -1, icon : <IoIosHelpCircleOutline/> },
//     { i: 3, x: 0, y: 1, icon : <CiLogout/> },
//     { i: 4, x: 1, y: 1, icon : <CiSettings/> },
//     { i: 5, x: -1, y: -1, icon : <BiMessageRoundedDots/> },
//     { i: 6, x: 0, y: 0, icon : <BsCamera/> },
//     { i: 7, x: -1, y: 1, icon : <CgProfile/> },
//     { i: 8, x: 1, y: -1, icon : <RiEditBoxLine/> }
//   ];

//   return (
//     <div className={`navigation${isActive ? ' active' : ''}`} onClick={handleNavigationClick}>
//       {icons.map((icon: Icon) => (
//         <span
//           key={icon.i}
//           style={{
//             '--i': icon.i,
//             '--x': icon.x,
//             '--y': icon.y
//           }}
//         >
//           <ion-icon name="ellipsis-horizontal">{icon.icon}</ion-icon>
//         </span>
//       ))}
//     </div>
//   );
// }

// function SquareMenu() {
//   return (
//     <div className="App">
//       <Navigation />
//     </div>
//   );
// }

// export default SquareMenu;

// ----------------------------type script code end-------------------------

// ----------------------------------css file code start------------------------------------

/* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
} */

/* body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #212532;
} */

/* .navigation{
    position: relative;
    width: 70px;
    height: 70px;
    background: #212532;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0.8s;
}

.navigation.active{
    width: 200px;
    height: 200px;
    transition-delay: 0s;
}
.navigation span{
    position: absolute;
    width: 7px;
    height: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 50%;
    transform: translate(calc(12px * var(--x)),calc(12px * var(--y)));
    transition: transform 0.5s, width 0.5s, height 0.5s;
    background: 0.5s;
    transition-delay: calc(0.1s * var(--i));
}
.navigation.active span{
    width: 45px;
    height: 45px;
    background: #333849;
    transform: translate(calc(60px * var(--x)),calc(60px * var(--y)));
}

.navigation span ion-icon{
    transition: 0.5s;
    font-size: 0em;
}
.navigation.active span ion-icon{
    font-size: 1.35em;
    color: #fff;
}
.navigation.active span:hover ion-icon{
    color: #41e8e0;
    filter: drop-shadow(0 0 2px #41e8e0) drop-shadow(0 0 5px #41e8e0) drop-shadow(0 0 15px #41e8e0);
} */

// ----------------------------------css file code end------------------------------------