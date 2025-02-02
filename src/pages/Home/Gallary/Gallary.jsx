import React from "react";
import image1 from "../../../assets/gallary/image1.jpg";
import image2 from "../../../assets/gallary/image2.jpg";
import image3 from "../../../assets/gallary/image3.jpg";
import image4 from "../../../assets/gallary/image4.jpg";
import image5 from "../../../assets/gallary/image5.jpg";

const Gallary = () => {
  return (
    <div className="md:w-[80%] mx-auto my-28">
      <div className=" mb-16">
        <h1 className="text-5xl font-bold text-center">
          Meditation <span className="text-secondary"></span> Visuals
        </h1>
      </div>
      <div class="md:grid grid-cols-2 items-center justify-center border gap-4">
        <div class="mb-4 md:mb-0">
          <img src={image1} alt="" className="md:h-[720px] w-full mx-auto " />
        </div>
        <div class="gap-4 grid grid-cols-2 items-start">
          <div className="">
            <img
              src={image2}
              alt=""
              className="md:h-[350px] w-full object-cover mx-auto"
            />
          </div>
          <div>
            <img
              src={image3}
              alt=""
              className="md:h-[350px] w-full object-cover mx-auto"
            />
          </div>
          <div>
            <img
              src={image4}
              alt=""
              className="md:h-[350px] w-full object-cover mx-auto"
            />
          </div>
          <div>
            <img
              src={image5}
              alt=""
              className="md:h-[350px] w-full object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
