import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ForgotPassword extends Component {
  render() {
    return (
      <>
          <div className="container-fluid h-100 animated bounceInDown">
            <div className="d-flex justify-content-center">
              <div className="card mt-5 col-md-8 mx-auto form-size">
                <header className="text-center">
                  <h1>
                    Forgot your password?
                    <small className="text-danger mt-3">We'll send you an email with a reset link.</small>
                  </h1>
                </header>

                <form>
                  <div className="form-group">
                    <input type="email" className="form-control" aria-describedby="emailHelp" required></input>
                    <label htmlFor="exampleInputEmail1" className="form-control-placeholder">Username / email</label>
                  </div>
                  <button type="submit" className="btn btn-primary mt-3 mb-3 submit hover-effect">
                    <div className="insider"></div>
                      Reset password
                  </button>
                </form>
              </div>
            </div>
          </div>
      </>
    )
  }
}
export default ForgotPassword;
