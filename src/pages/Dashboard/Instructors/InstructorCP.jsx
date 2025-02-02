import React from "react";
import bgimg from "../../../assets/dashboard/girl.jpg";

const InstructorCP = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <img
        className="max-w-[60%] max-h-[60%] mx-auto rounded-lg shadow-lg"
        src={bgimg}
        alt="Dashboard"
      />
    </div>
  );
};

export default InstructorCP;
