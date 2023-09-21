import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Search() {
  const [status, setstatus] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [value, setvalue] = useState({
    name: "",
    cityname: "",
  });
  const handleInput = (event) => {
    setvalue((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setstatus(!status);
    axios
      .post("http://localhost:8081/search", value)
      .then((res) => setStudentList(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      {!status ? (
        <div className="bg-white p-3 rounded w-25">
          <h1>
            <center>Search Data</center>
          </h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="employeeName">Employee Name</label>
              <input
                type="text"
                placeholder="Enter Employee Name"
                className="form-control rounded-0"
                name="name"
                onChange={handleInput}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="employeeCity">Employee City</label>
              <input
                type="text"
                placeholder="Enter Employee City"
                className="form-control rounded-0"
                name="cityname"
                onChange={handleInput}
              ></input>
            </div>
            <button type="submit" className="btn btn-success w-100">
              Search Data
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-3 rounded w-25">
          <table className="hello">
            <tr className="hello">
              <th className="hello">Name of Employee</th>
              <th className="hello">City of Employee</th>
            </tr>

            {studentList.map((val, key) => {
              return (
                <tr className="hello">
                  <td className="hello">{val.name}</td>
                  <td className="hello">{val.cityname}</td>
                </tr>
              );
            })}
          </table>
          <Link
            to="/"
            type="submit"
            className="btn btn-success border w-50 rounded-10 m-10"
          >
            Back
          </Link>
        </div>
      )}
    </div>
  );
}