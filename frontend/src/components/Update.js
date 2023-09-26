import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Update({ nameValue, citynameValue }) {
  const [value, setvalue] = useState({
    name: "",
    cityname: "",
    changename: "",
    changecityname: "",
  });
  useEffect(() => {
    setvalue({
      name: nameValue,
      cityname: citynameValue,
    });
  }, [nameValue, citynameValue]);

  //Handle Input box data
  const handleInput = (event) => {
    setvalue({
      ...value,
      [event.target.name]: event.target.value,
      changename: nameValue,
      changecityname: citynameValue,
    });
  };

  const navigate = useNavigate(); //Use to navigate page

  //Call After clicking button
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/update", value)
      .then((res) => {
        if (res.data === "same data") {
          alert("same data already present in the database");
        } else {
          navigate("/");
        }
      })
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
            <label htmlFor="">Enter Name:</label>
            <input
              type="text"
              placeholder="Enter employee name"
              className="form-control rounded-0"
              name="name"
              value={value.name}
              onChange={handleInput}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="">Enter cityname:</label>
            <input
              type="text"
              placeholder="Enter cityname"
              className="form-control rounded-0"
              name="cityname"
              value={value.cityname}
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
            Home
          </Link>
        </form>
      </div>
    </div>
  );
}
