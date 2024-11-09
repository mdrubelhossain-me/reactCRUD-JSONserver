/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ListEdit = () => {
  // Initialize states for form data
  const [data, setData] = useState({});
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [active, setActive] = useState(true);
  const [validation, setValidation] = useState(false);

  // Extract empid from URL params
  const { empid } = useParams();
  const navigate = useNavigate();

  // Fetch employee data on component mount
  useEffect(() => {
    fetch(`http://localhost:8000/employee/${empid}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setId(data.id);
        setName(data.name || "");
        setEmail(data.email || "");
        setPhone(data.phone || "");
        setActive(data.active || true);
      })
      .catch((err) => console.log(err));
  }, [empid]);

  // Handle form submission (update data)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the updated data
    const updatedData = { name, email, phone, active };

    // Send PUT request to update the data
    fetch(`http://localhost:8000/employee/${id}`, {
      method: "PUT", // Changed to PUT for updating existing data
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Updated Successfully");
          navigate("/"); // Redirect to home page
        } else {
          throw new Error("Failed to update data");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error: " + err.message);
      });
  };

  return (
    <div className="container">
      <div className="card p-3">
        <h2 className="border-bottom pb-2">Edit Employee</h2>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-lg-6">
                <label className="form-label">Id</label>
                <input
                  value={id}
                  disabled
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label className="form-label">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onMouseDown={() => setValidation(true)}
                  type="text"
                  className="form-control"
                />
                {name.length === 0 && validation && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label className="form-label">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label className="form-label">Phone</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  className="form-control"
                  
                />
              </div>
              <div className="form-check">
                <input
                  checked={active}
                  onChange={(e) => setActive(e.target.checked)}
                  className="form-check-input"
                  type="checkbox"
                />
                <label className="form-check-label">Is Active</label>
              </div>
              <div className="d-flex justify-content-end mt-4">
                <Link to="/" className="btn btn-dark">
                  Go Back
                </Link>
                <button type="submit" className="btn btn-primary mx-2">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListEdit;
