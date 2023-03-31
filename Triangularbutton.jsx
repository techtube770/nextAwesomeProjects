import React from 'react'

const Triangularbutton = () => {
    return (
        <div>
          <a href="#">
            <span>Button</span>
            <span>Button</span>
          </a>
        </div>
      );
}

export default Triangularbutton;

// ----------------------------typescript code start------------------------


// import React from 'react';

// const Triangularbutton: React.FC = () => {
//     return (
//         <div>
//           <a href="#">
//             <span>Button</span>
//             <span>Button</span>
//           </a>
//         </div>
//       );
// }

// export default Triangularbutton;


// ----------------------------typescript code end------------------------



/* -------------------------------------Triangular button styling start ------------------------------ */

// *{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: 'Poppins', sans-serif;
// }
// body{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     min-height: 100vh;
//     background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
// }

// a{
//     position: relative;
//     display: inline-block;
//     width: 160px;
//     height: 50px;
//     box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
// }
// a span{
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     color: #fff;
//     background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-transform: uppercase;
//     letter-spacing: 2px;
//     font-size: 18px;
// }
// a span:nth-child(2){
//     color: #6c4ba5;
//     background: #fff;
//     overflow: hidden;
//     z-index: 2;
//     transition: 0.5s;
//     clip-path: polygon(60% 0, 100% 0%, 100% 100%, 60% 100%, 40% 53%);
// }

// a span:nth-child(2):hover{
    
//     clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%, 0 50%);
// }
// a span:nth-child(1):hover ~ span:nth-child(2){
    
//     clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 100% 50%);
// }

/* -------------------------------------Triangular button styling end ------------------------------ */