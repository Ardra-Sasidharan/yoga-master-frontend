import React, { useEffect, useState } from "react";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import img from "../../../assets/home/girl.jpg";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);
  console.log(instructors);
  const axiosFetch = useAxiosFetch();

  useEffect(() => {
    axiosFetch
      .get("/popular-instructors")
      .then((data) => {
        setInstructors(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full lg:w-[80%] mx-auto my-20">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          Meet Our <span className="text-secondary"> Exceptional </span>
          Instructors
        </h1>
        <div className="w-[90%] sm:w-[60%] lg:w-[40%] text-center mx-auto my-4">
          <p className="text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed">
            Explore the classes led by our most successful instructors,
            recognized for their ability to engage and inspire a large number of
            students.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid mb-12 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 mx-auto">
        {instructors && instructors.length > 0 ? (
          instructors?.slice(0, 4).map((instructor, i) => (
            <div key={i} className="flex justify-center items-center">
              <div className="flex hover:-translate-y-2 duration-200 cursor-pointer flex-col shadow-md py-8 px-10 md:px-8 rounded-md text-center h-full">
                <img
                  className="rounded-full border-4 border-gray-300 h-40 w-40 m-auto object-cover"
                  src={instructor?.instructor?.photoUrl || img}
                  alt="Instructor"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {instructor?.instructor?.name}
                  </h3>
                  <p className="text-sm text-gray-500">Instructor</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Total Students: {instructor?.totalEnrolled}
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={instructor?.instructor?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-2xl text-gray-600 hover:text-secondary" />
                  </a>
                  <a
                    href={instructor?.instructor?.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-2xl text-gray-600 hover:text-secondary" />
                  </a>
                  <a
                    href={instructor?.instructor?.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-2xl text-gray-600 hover:text-secondary" />
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No instructors available.
          </p>
        )}
      </div>
    </div>
  );
};

export default PopularInstructor;
