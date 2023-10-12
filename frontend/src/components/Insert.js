import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDiv } from "../redux/Slice";
import { setDept } from "../redux/dept.Slice";
export default function Insert() {
  //useDispatch initialisation here...
  const dispatch = useDispatch();

  const DeptName = useSelector((state) => state.deptValue.deptValue);
  const [value, setvalue] = useState({
    name: "",
    cityname: "",
    dept: "1",
  });

  //UseEffect to call the department table to gettingg the table...
  useEffect(() => {
    axios
      .get("http://localhost:8081/api/department/getAll")
      .then((res) => {
        if (res) {
          dispatch(setDept(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //handleinput method is use to handle event and store data what we are typing on insertion form.
  const handleInput = (event) => {
    setvalue((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  //this method will trigger when we click insert buttoon.
  const handleSubmit = (event) => {
    event.preventDefault();

    //axios use to connect frontend with backend and passing also value(it contains data of form) to backend.
    axios
      .post("http://localhost:8081/api/employee", value)
      .then((res) => {
        if (res.data === "Error") {
          alert("Already Same data is present in the table");
        } else {
          alert("Data inserted successfully");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded">
        <h1>
          <center>Data Insert</center>
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
          <div className="mb-3 d-flex gap-3">
            <label htmlFor="employeeName">Employee department</label>
            <select name="dept" onChange={handleInput}>
              {DeptName.map((data) => (
                <option value={data.d_id} key={data.d_id}>
                  {data.dName}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex gap-5">
            <button type="submit" className="btn btn-success w-100">
              Insert Data
            </button>
            <Link
              to="/getAll"
              type="submit"
              className="btn btn-default border w-100 rounded-10"
              onClick={() => {
                dispatch(setDiv("List"));
              }}
            >
              Get All Record
            </Link>
            <Link
              to="/search"
              type="submit"
              className="btn btn-default border w-100 rounded-10"
              onClick={() => {
                dispatch(setDiv("Search Data"));
              }}
            >
              Search Record
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
