import React, { useEffect, useState } from "react";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import Card from "./Card";

const PopularClasses = () => {
  const axiosFetch = useAxiosFetch();
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const fetchClasses = async () => {
      const response = await axiosFetch.get("/popular_classes");
      setClasses(response.data);
    };
    fetchClasses();
  }, []);
  return (
    <div className="md:w-[80%] mx-auto my-36">
      <div className="">
        <h1 className="text-5xl font-bold text-center">
          Our <span className="text-secondary">Trending</span> Classes
        </h1>
        <div className="w-[40%] text-center mx-auto my-4">
          <p className="text-gray-500">
            Discover the classes that have captured the interest of many
            students due to their engaging content and expert teaching
          </p>
        </div>
      </div>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3">
        {classes.map((item, index) => (
          <Card
            id={item._id}
            key={index}
            availableSeats={item.availableSeats}
            price={item.price}
            name={item.name}
            image={item.image}
            totalEnrolled={item.totalEnrolled}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
