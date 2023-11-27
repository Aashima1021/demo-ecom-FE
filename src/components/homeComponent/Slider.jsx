import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { slideImages } from "../../pages/AllArrays/Arrays"; 
const Slider = () => {
  return (
    <div className="slide-container ">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="h-[200px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[500px] flex center center bg-cover w-full"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
