import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <>
          <div className="container-fluid h-100 animated bounceInDown">
            <div className="d-flex justify-content-center">
              <div className="card mt-5 col-md-8 mx-auto form-size">
                <header className="text-center">
                  <h1>
                    Start using Zeplin!
                    <small className="text-danger mt-3">It’s free!.</small>
                  </h1>
                </header>

                <form>
                  <div className="form-group">
                    <input type="email" className="form-control" aria-describedby="emailHelp" required></input>
                    <label htmlFor="exampleInputEmail1" className="form-control-placeholder">Email</label>
                  </div>
                  <div className="form-group">
                    <input type="username" className="form-control" aria-describedby="usernameHelp" required></input>
                    <label htmlFor="exampleInputUsername" className="form-control-placeholder">Username</label>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" required></input>
                    <label htmlFor="exampleInputPassword1" className="inputLabel form-control-placeholder">Password</label>
                  </div>
                  <button type="submit" className="btn btn-primary mt-3 mb-3 submit hover-effect">
                    <div className="insider"></div>Submit
                  </button>
                </form>

                  <footer className="section">
                    <div className="container-fluid">
                      <div className="row">
                          <div className="col-sm-12 text-center">
                              <span className="footer-font">Already have an account?<Link to="/"> Login here</Link></span>
                          </div>
                          <div className="col-sm-12 text-center">
                              <span className="footer-font">By clicking ‘Sign up FREE’, I agree to Zeplin’s <a href="https://zeplin.io/terms"> Terms of Service</a></span>
                          </div>
                      </div>
                    </div>
                  </footer>
              </div>
            </div>
          </div>
    </>
    )
  }
}
export default Register;
