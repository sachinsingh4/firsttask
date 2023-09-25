import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/GetAll.css";
import Update from "./Update";
export default function GetAllDetails() {
  const [status, setstatus] = useState(false);
  //use usestate here to store employee current state in employeelist and update using setemployeelist..
  const [employeelist, setemployeelist] = useState([]);
  const [name, setname] = useState("");
  const [cityname, setcityname] = useState("");
  const [cname, setcname] = useState([]);
  const [show, setshow] = useState(false);
  //Handle Update...
  const handleupdate = (name, cityname) => {
    setname(name);
    setcityname(cityname);
    setshow(true);
    const obj = { name: name, cityname: cityname };
    setcname([...cname, obj]);
  };
  useEffect(() => {
    console.log();
  }, [cname]);
  //delete data from table...
  const handledelete = (name, cityname) => {
    axios
      .post("http://localhost:8081/delete", { name, cityname })
      .then((res) => {
        setemployeelist(res.data);
      })
      .catch((err) => console.log(err));
  };

  //this method will trigger when we click on get all record  button..
  const handleSubmit = (event) => {
    event.preventDefault();
    setstatus(!status);

    //use axios to connect frontend with backend.
    axios
      .post("http://localhost:8081/getAll")
      .then((res) => setemployeelist(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary">
      <div className="bg-white rounded w-auto p-3 h-auto d-inline-block m-5">
        <form action="" onClick={handleSubmit}>
          {!status ? (
            <button type="submit" className="btn btn-success">
              GET All Record
            </button>
          ) : (
            ""
          )}
        </form>
        {status ? (
          <table className="hello ">
            <tr className="hello">
              <th className="hello">Name of Employee</th>
              <th className="hello">City of Employee</th>
            </tr>

            {employeelist.map((val, index) => {
              return (
                <tr key={val.id}>
                  <td className="hello">{val.name}</td>
                  <td className="hello">{val.cityname}</td>
                  <td>
                    <button
                      onClick={() => handledelete(val.name, val.cityname)}
                    >
                      delete
                    </button>
                    <button
                      onClick={() => handleupdate(val.name, val.cityname)}
                    >
                      update
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        ) : (
          ""
        )}
        {status ? (
          <Link
            to="/"
            type="submit"
            className="btn btn-success border w-50 rounded-10 m-10"
          >
            Back
          </Link>
        ) : (
          ""
        )}
        {show && (
          <Update
            show={show}
            name={name}
            cityname={cityname}
            setcname={setcname}
          />
        )}
      </div>
    </div>
  );
}
