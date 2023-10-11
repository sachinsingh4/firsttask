import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/GetAll.css";
import Update from "./Update";
import { setDiv } from "../redux/Slice";
import { useDispatch } from "react-redux";
export default function GetAllDetails() {
  const dispatch = useDispatch();
  const [status, setstatus] = useState(false);
  //use usestate here to store employee current state in employeelist and update using setemployeelist..
  const [employeelist, setemployeelist] = useState([]);
  const [eid, setEid] = useState();
  const [name, setname] = useState("");
  const [cityname, setcityname] = useState("");
  const [cname, setcname] = useState([]);
  const [show, setshow] = useState(false);

  //Handle Update...
  const handleupdate = (name, cityname, eid) => {
    dispatch(setDiv("Update Data"));
    setEid(eid);
    setname(name);
    setcityname(cityname);
    setshow(true);
    const obj = { name: name, cityname: cityname, eid: eid };
    setcname([...cname, obj]);
  };
  useEffect(() => {
    console.log();
  }, [cname]);
  //delete data from table...
  const handledelete = (eid) => {
    const confirm = window.confirm("Are you sure want to delete data");
    if (!confirm) {
      return;
    }
    axios
      .delete(`http://localhost:8081/delete/${eid}`)
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
      .get("http://localhost:8081/getAll")
      .then((res) => {
        setemployeelist(res.data);
      })
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
              <th className="hello">Action</th>
            </tr>

            {employeelist.map((val, index) => {
              return (
                <tr key={val.eid}>
                  <td className="hello">{val.name}</td>
                  <td className="hello">{val.cityname}</td>
                  <td>
                    <button onClick={() => handledelete(val.eid)}>
                      delete
                    </button>
                    <button
                      onClick={() =>
                        handleupdate(val.name, val.cityname, val.eid)
                      }
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
            onClick={() => {
              dispatch(setDiv("Insert"));
            }}
          >
            Back
          </Link>
        ) : (
          ""
        )}
        {show && <Update eid={eid} nameValue={name} citynameValue={cityname} />}
      </div>
    </div>
  );
}

//Acer, Honhai(optional), Gestream, HCMF, IRTI(nt), powertech(nt),
