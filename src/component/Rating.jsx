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
    <div className="w-full lg:w-fit flex flex-col gap-5 font-theme lg:pt-5">
    {Ratings.map ((rating, index) => (
        <div key={index} className={`w-full rounded-lg p-3 items-center flex flex-col gap-3 lg:flex-row lg:justify-left lg:w-5/6 lg:px-5 lg:pr-16 bg-lightGrayishMagenta ${index === 0 ? '  ': index === 1 ? 'lg:ml-10': 'lg:ml-28'}`}>
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
