import React, { useEffect, useState } from "react";
import useAxiosFetch from "../../../../hooks/useAxiosFetch";
import { ScaleLoader } from "react-spinners";

const ManageApplication = () => {
  const axiosFetch = useAxiosFetch();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all applied instructors
    axiosFetch
      .get("/applied-instructors")
      .then((res) => {
        setApplications(res.data); // Store the response data
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((err) => {
        console.error("Error fetching instructors:", err);
        setLoading(false);
      });
  }, []); // Empty dependency array to run once when the component is mounted

  if (loading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <ScaleLoader color="#FF1949" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Instructor Applications</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Experience</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.email} className="border-b">
                <td className="border px-4 py-2">{app.name}</td>
                <td className="border px-4 py-2">{app.email}</td>
                <td className="border px-4 py-2">{app.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageApplication;
