import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setDiv } from "../redux/Slice";
import { useDispatch, useSelector } from "react-redux";
export default function Update({ eid, nameValue, citynameValue }) {
  const dispatch = useDispatch();
  const DeptName = useSelector((state) => state.deptValue.deptValue);
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
      dept: 0,
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
    console.log(value);
    event.preventDefault();
    axios
      .put(`http://localhost:8081/api/employee/update/${eid}`, value)
      .then((res) => {
        if (res.data === "same data") {
          alert("same data already present in the database");
        } else {
          alert("successfully updated");
          dispatch(setDiv("Insert"));
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
          <button type="submit" className="btn btn-success border  rounded-10">
            Update Data
          </button>
          <Link
            to="/"
            type="submit"
            className="btn btn-default border  rounded-10 "
            onClick={() => {
              dispatch(setDiv("Insert"));
            }}
          >
            Home
          </Link>
        </form>
      </div>
    </div>
  );
}
