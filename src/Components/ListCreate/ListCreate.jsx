/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ListCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <div className="card p-3">
        <h2 className="border-bottom pb-2">Creat New</h2>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-3">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label className="form-label">Id</label>
                <input
                  {...register("id", {
                    required: "This field is required",
                    minLength: {
                      value: 1,
                      message: "Minimum 1 characters",
                    },
                  })}
                  type="text"
                  className={`form-control ${errors.id ? "is-invalid" : ""}`}
                  rows="3"
                />
                {errors.id && (
                  <div className="invalid-feedback">{errors.id.message}</div>
                )}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label className="form-label">Name</label>
                <input
                  {...register("name", {
                    required: "This field is required",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters",
                    },
                  })}
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label className="form-label">Email</label>
                <input
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label className="form-label">Phone</label>
                <input
                  {...register("phone", {
                    required: "This field is required",
                    minLength: {
                      value: 10,
                      message: "Minimum 10 characters",
                    },
                  })}
                  type="text"
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone.message}</div>
                )}
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                <label className="form-check-label">is Active</label>
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
        <div></div>
      </div>
    </div>
  );
};

export default ListCreate;
