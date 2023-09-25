import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Update({ name, cityname }) {
  const [value, setvalue] = useState({
    name: "",
    cityname: "",
    changename: "",
    changecityname: "",
  });
  const handleInput = (event) => {
    setvalue((prevState) => ({
      ...prevState,
      [event.target.name]: [event.target.value],
      changename: name,
      changecityname: cityname,
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    console.log(value);
    event.preventDefault();
    axios
      .post("http://localhost:8081/update", value)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary ">
      <div className="bg-white p-3 rounded m-5">
        <h1>
          <center>Update Data</center>
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="employeeName">Enter Id:</label>
            <input
              type="text"
              placeholder="Enter employee name"
              className="form-control rounded-0"
              name="name"
              onChange={handleInput}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="employeeName">Enter Id:</label>
            <input
              type="text"
              placeholder="Enter cityname"
              className="form-control rounded-0"
              name="cityname"
              onChange={handleInput}
            ></input>
          </div>
          <button type="submit" className="btn btn-success border  rounded-10">
            Update Data
          </button>
          <Link
            to="/"
            type="submit"
            className="btn btn-default border  rounded-10 "
          >
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}
