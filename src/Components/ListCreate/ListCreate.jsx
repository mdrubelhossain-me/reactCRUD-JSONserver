import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ListCreate = () => {
  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [active, activeChange] = useState(true);
  const [validation, valChange]=useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const setData = { name, email, phone, active };

    fetch("http://localhost:8000/employee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(setData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Saved Successfully");
          navigate("/");
        } else {
          throw new Error("Failed to save data");
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
        <h2 className="border-bottom pb-2">Create New</h2>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-lg-6">
                <label className="form-label">Id</label>
                <input
                  value={id}
                  disabled="disabled"
                  onChange={(e) => e.target.value}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label className="form-label">Name</label>
                <input
                  value={name}
                  onChange={(e) => nameChange(e.target.value)}
                  onMouseDown={(e)=>valChange(true)}
                  type="text"
                  className="form-control"
                  
                />
                {name.length==0 && validation && <span className="text-danger">This field is required</span>}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label className="form-label">Email</label>
                <input
                  value={email}
                  onChange={(e) => emailChange(e.target.value)}
                  type="email"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label className="form-label">Phone</label>
                <input
                  value={phone}
                  onChange={(e) => phoneChange(e.target.value)}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-check">
                <input
                  checked={active}
                  onChange={(e) => activeChange(e.target.checked)}
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
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListCreate;
