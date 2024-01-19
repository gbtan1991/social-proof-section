import React from "react";
import bgTopMobile from '../images/bg-pattern-top-mobile.svg';
import bgBotMobile from '../images/bg-pattern-bottom-mobile.svg';


const Rating = () => {

    



  const bgMobileTop = {
    backgroundImage: `url(${bgTopMobile})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left",
    
    
  };
  const bgMobileBottom = {
      backgroundImage: `url(${bgBotMobile})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top left",
    
        }

  return (
    <>
      <div className="relative">
      <div style={bgMobileTop} className="absolute top-0 left-0 w-screen h-screen bg-transparent">test</div>
      <div style={bgMobileBottom} className="absolute top-0 left-0 w-screen h-screen bg-transparent ">test</div>
      </div>
    </>
  );
};

export default Rating;
