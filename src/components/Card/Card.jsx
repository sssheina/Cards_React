import React from "react";

import "./Card.css";

class Card extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isSelected: props.isSelected,
  //   };
  // }

  // handleCardClick = () => {
  //   this.setState({ isSelected: !this.state.isSelected });
  // };

  render() {
    const {
      level,
      titleRequirements,
      requirement1,
      requirement2,
      requirement3,
      annualTurnover,
      color,
      backgroundColor,
      logo,
      check,
      isSelected,
    } = this.props;

    // let classCard = this.state.isSelected ? "selected" : "";
    let classCard;
    if (isSelected) classCard = "selected";

    return (

      <div className={`card ${classCard}`} 
      style={{ backgroundColor: backgroundColor, color: color }} >
        <div className="main__wrapper">
         <div className="main__title-block">
          <div className="main__star-icon">
             <img src={logo} alt="Star icon" className="main__star-icon" />
           </div>
          <div className="main__title title">{level}</div>
        </div>
         <div className="main__requirements-list list">
          <div className="main__requirements-name requirements">{titleRequirements}</div>
          
          
          {requirement3 ? (
            <div className="main__block">
              <div className="main__block-requirements">
              <div className="main__requirements-item">
                <div className="main__requirements-text text">{requirement1}</div>
                <div className="main__requirements-icon check">
                  <img src={check} alt="Check mark"  className="main__requirements-icon check" />
                </div>
              </div>
              <div className="main__requirements-item">
                <div className="main__requirements-text text">{requirement2}</div>
                <div className="main__requirements-icon check">
                  <img src={check} alt="Check mark" className="main__requirements-icon check" />
                </div>
              </div>
              <div className="main__requirements-item">
                <div className="main__requirements-text text">{requirement3}</div>
                <div className="main__requirements-icon check">
                  <img src={check} alt="Check mark" className="main__requirements-icon check" />
                </div>
              </div>
              </div>
              <div class="main__turnover turnover">
                {annualTurnover}
        </div>
            </div>
          ) : (
            <div className="main__block">
              <div className="main__block-requirements">
              <div className="main__requirements-item">
                <div className="main__requirements-text text">{requirement1}</div>
                <div className="main__requirements-icon check">
                  <img src={check} alt="Check mark" className="main__requirements-icon check" />
                </div>
              </div>
              <div className="main__requirements-item">
                <div className="main__requirements-text text">{requirement2}</div>
                <div className="main__requirements-icon check">
                  <img src={check} alt="Check mark" className="main__requirements-icon check" />
                </div>
              </div>
              </div>
              <div class="main__turnover turnover">
         {annualTurnover}
        </div>
            </div>
          )}
        </div>
      </div>
    </div>
    );
  }
}

export default Card;





// import React, { useState } from 'react';

// import './Card.css';


// export default function Card(props) {
// const [pressed, setPressed] = useState(false);
// const {
//     level,
//     titleRequirements,
//     requirement1,
//     requirement2,
//     requirement3,
//     annualTurnover,
//     color,
//     backgroundColor,
//     logo,
//     check,

// } = props;

// const handleChange = () => {
//     setPressed(!pressed);
// };
// let classCard;
// if (pressed) classCard = 'selected';

// return (
//     <div className={`main__card card ${classCard}`} style={{ backgroundColor: backgroundColor, color: color }} onClick={handleChange}>
//       <div className="main__wrapper">
//         <div className="main__title-block">
//           <div className="main__star-icon">
//             <img src={logo} alt="Star icon" />
//           </div>
//           <div className="main__title title">{level}</div>
//         </div>
//         <div className="main__requirements-list list">
//           <div className="main__requirements-name requirements">{titleRequirements}</div>
          
          
//           {requirement3 ? (
//             <>
//               <div className="main__requirements-item">
//                 <div className="main__requirements-text text">{requirement1}</div>
//                 <div className="main__requirements-icon check">
//                   <img src={check} alt="Check mark" />
//                 </div>
//               </div>
//               <div className="main__requirements-item">
//                 <div className="main__requirements-text text">{requirement2}</div>
//                 <div className="main__requirements-icon check">
//                   <img src={check} alt="Check mark" />
//                 </div>
//               </div>
//               <div className="main__requirements-item">
//                 <div className="main__requirements-text text">{requirement3}</div>
//                 <div className="main__requirements-icon check">
//                   <img src={check} alt="Check mark" />
//                 </div>
//               </div>
//               <div class="main__turnover turnover">
//                 {annualTurnover}
//         </div>
//             </>
//           ) : (
//             <>
//               <div className="main__requirements-item">
//                 <div className="main__requirements-text text">{requirement1}</div>
//                 <div className="main__requirements-icon check">
//                   <img src={check} alt="Check mark" />
//                 </div>
//               </div>
//               <div className="main__requirements-item">
//                 <div className="main__requirements-text text">{requirement2}</div>
//                 <div className="main__requirements-icon check">
//                   <img src={check} alt="Check mark" />
//                 </div>
//               </div>
//               <div class="main__turnover turnover">
//          {annualTurnover}
//         </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// return (
// <div className={`main__card card ${classCard}`} style={{ backgroundColor: backgroundColor, color: color }} onClick={handleChange}>
//         <div className="main__wrapper">
//           <div className="main__title-block">
//             <div className="main__star-icon">
//               <img src={logo} alt="Star icon" />
//             </div>
//             <div className="main__title title">{level}</div>
//           </div>

//           <div className="main__requirements-list list">
//             <div className="main__requirements-name requirements">{titleRequirements}</div>

//             <div className="main__requirements-item">
//               <div className="main__requirements-text text">{requirement1}</div>
//               <div className="main__requirements-icon check">
//                 <img
//                   src={check}
//                   alt="Check mark"
//                 />
//               </div>
//             </div>

//             <div className="main__requirements-item">
//               <div className="main__requirements-text text">{requirement2}</div>
//               <div className="main__requirements-icon check">
//                 <img
//                   src={check}
//                   alt="Check mark"
//                 />
//               </div>
//             </div>

//             <div className="main__requirements-item">
//               <div className="main__requirements-text text">{requirement3}</div>
//               <div className="main__requirements-icon check">
//                 <img
//                   src={check}
//                   alt="Check mark"
//                 />
//               </div>
//             </div>
//             </div>
//         </div>
//         <div class="main__turnover turnover">
//           {annualTurnover}
//         </div>
//     </div>
// );

// };