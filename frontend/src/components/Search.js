import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setDiv } from "../redux/Slice";
import { useDispatch } from "react-redux";
export default function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      .then((res) => {
        if (res.data.length === 0) {
          alert("No data is found with this Search");
        } else {
          setStudentList(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary">
      {!status ? (
        <div className="bg-white p-3 rounded m-5">
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
            <button
              className="btn btn-success w-100"
              onSubmit={() => handleSubmit()}
            >
              Search Data
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-3 rounded h-80 m-5">
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
          <div className="d-flex">
            <Link
              to="/"
              type="submit"
              className="btn btn-success border  rounded-10 m-10"
              onClick={() => {
                dispatch(setDiv("Insert"));
              }}
            >
              Home
            </Link>
            <Link
              onClick={() => setstatus(!status)}
              type="submit"
              className="btn btn-success border rounded-10 m-10"
            >
              Search Again
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
