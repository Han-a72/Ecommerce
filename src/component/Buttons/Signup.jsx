import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Signup = () => {
  return (
    <div>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-outline-primary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        <span className="fa fa-user-plus me-1"></span> Register
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
            <div className="modal-header" style={{ backgroundColor: '#007bff', color: 'white' }}>
              <h3 className="modal-title" id="exampleModalLabel">Sign Up</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-danger w-100 mb-4">
                <span className="fa fa-google me-2"></span> Sign up With Google
              </button>
              <form>
                <div className="mb-3 ">
                  <label htmlFor="exampleInput" className="form-label ">
                    Username
                  </label>
                  <input type="text" className="form-control bg-light" id="exampleInput" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control bg-light" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check p-2">
                  <input
                    type="checkbox"
                    className="form-check-input m-1"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label  " htmlFor="exampleCheck1">
                    I agree to the terms and conditions
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mt-5"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
