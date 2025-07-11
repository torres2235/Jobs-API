import { useState, useEffect } from "react";

const Dashboard = () => {
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
        console.log(data);
        setJobs(data);
      });
  }, []);

  console.log(jobs);

  return (
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
    </div>
  );
};

export default Dashboard;
