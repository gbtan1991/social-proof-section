import React from "react";
import star from '../assets/images/icon-star.svg'

const Rating = () => {
  const Ratings = [
    {
      rate: 5,
      category: "Reviews",
    },

    {
      rate: 5,
      category: "Report Guru",
    },
    {
      rate: 5,
      category: "BestTech",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-5 font-theme">
    {Ratings.map ((rating, index) => (
        <div key={index} className="w-full rounded-lg p-3 items-center flex flex-col gap-3 bg-lightGrayishMagenta ">
          <div className="flex flex-row gap-2">
          {[...Array(rating.rate)].map((_, i) => (
            <div key={i}>
            <img  src={star} alt="star" />
            </div>
            
          ))}
          </div>
          <p className="text-veryDarkMagenta text-base font-extrabold tracking-tight">Rated {rating.rate} stars in {rating.category}</p>

            

          
        </div>
    ) )}      
    </div>
  );
};

export default Rating;
