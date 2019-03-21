import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      <>
          <div className="container-fluid h-100 animated bounceInDown">
            <div className="d-flex justify-content-center">
              <div className="card mt-5 col-md-8 mx-auto form-size">
                <header className="text-center">
                  <h1>
                    Great to see you again!
                  </h1>
                </header>

                <form>
                  <div className="form-group">

                    <input type="email" className="form-control" aria-describedby="emailHelp" required></input>
                    <label htmlFor="exampleInputEmail1" className="form-control-placeholder">Username / email</label>
                  </div>
                  <div className="form-group">

                    <input type="password" className="form-control" id="exampleInputPassword1" required></input>
                    <label htmlFor="exampleInputPassword1" className="inputLabel form-control-placeholder">Password</label>
                  </div>
                  <button type="submit" className="btn btn-primary mt-3 mb-3 submit hover-effect">
                    <div class='insider'></div>Submit
                  </button>
                </form>



                <footer className="section">
                  <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-4">
                            <span className="footer-font"><Link to='/ForgotPassword'>Forgot Password?</Link></span>
                        </div>
                        <div className="col-sm-8 text-right">
                            <span className="footer-font">Don't have an account? <Link to='/Register'>Get started</Link></span>
                        </div>
                        <div  className="col-sm-12 text-center" id="downloadApp">
                            <span className="footer-font">
                                Looking for the
                                <span className="mac">Mac</span><span className="windows">Windows</span> app?
                                <a href="https://app.zeplin.io/downloads" className="downloadsLink"> Download here</a>
                            </span>
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
