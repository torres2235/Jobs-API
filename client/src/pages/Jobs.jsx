import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

const Jobs = () => {
  const [jobs, setJobs] = useState(null);
  /* API Call */
  const URL = "https://jobs-api-075j.onrender.com/api/v1/jobs";
  const LOCAL_URL = "http://localhost:3000/api/v1/jobs";

  useEffect(() => {
    fetch(URL, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setJobs(data);
      });
  }, []);

  console.log(jobs);

  return (
    <div className="flex flex-row min-h-full min-w-fit bg-gradient-to-b from-white to-blue-600 text-gray-800 relative">
      <Sidebar />
      <div>
        <h1>Login</h1>
        {jobs && (
          <ul>
            {jobs.jobs.map((job) => (
              <li key={job._id} className="p-5">
                <p>{job._id}</p>
                <p>{job.company}</p>
                <p>{job.status}</p>
                <p>{job.position}</p>
              </li>
            ))}
          </ul>
        )}
        {/* Footer
        <footer className="bg-white py-6 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Ctrl+Alt+Employed. All rights
          reserved.
        </footer> */}
      </div>
    </div>
  );
};

export default Jobs;
