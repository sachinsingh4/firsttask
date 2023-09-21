import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Search() {
  const [value, setvalue] = useState({
    id: "",
    name: "",
  });
  const handleInput = (event) => {
    setvalue((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/update", value)
      .then((res) => alert("successfully Updated"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h1>
          <center>Update Data</center>
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="employeeName">Enter Id:</label>
            <input
              type="text"
              placeholder="Enter id"
              className="form-control rounded-0"
              id="id"
              onChange={handleInput}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="employeeName">Enter Id:</label>
            <input
              type="text"
              placeholder="Enter name"
              className="form-control rounded-0"
              name="name"
              onChange={handleInput}
            ></input>
          </div>
          <button
            type="submit"
            className="btn btn-success border w-50 rounded-10 m-10"
          >
            Update Data
          </button>
          <Link
            to="/"
            type="submit"
            className="btn btn-default border w-50 rounded-10 m-10"
          >
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}
