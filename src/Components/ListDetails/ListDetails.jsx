/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ListDetails = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/employee/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="card p-4">
        {data && (
          <div>
            <h6>Details</h6>
            <h2>ID: {data.id}</h2>
            <h3>Name: {data.name}</h3>
            <h3>Email: {data.email}</h3>
            <h3>Phone: {data.phone}</h3>
            <Link to="/" className="btn btn-primary mt-3">Go Back</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListDetails;
