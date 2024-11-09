/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployListing = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const LoadEdit=(id)=>{
    navigate("/list/edit/"+id);
  }

  const Removefunction=(id)=>{
    
  }

  const LoadDetails=(id)=>{
    navigate("/list/details/"+id);
  }





  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="d-flex justify-content-between align-items-center border-bottom p-3">
          <h4>LIST</h4>
          <Link to="list/create" className="btn btn-primary">Add New</Link>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table align-middle table-striped">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {data &&
                  data.map((list) => (
                    <tr key={list.id}>
                      <td>{list.id}</td>
                      <td>{list.name}</td>
                      <td>{list.email}</td>
                      <td>{list.phone}</td>
                      <td>
                        <a onClick={()=>LoadEdit(list.id)} className="btn btn-primary">
                          Edit
                        </a>
                        <a onClick={()=>Removefunction(list.id)} className="btn btn-danger mx-2">
                          Delete
                        </a>
                        <a onClick={()=>LoadDetails(list.id)} className="btn btn-success">
                          Details
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployListing;
