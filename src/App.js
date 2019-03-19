import React, { Component } from 'react';

// includes (css)
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <>
          <div className="container-fluid  animated bounceInDown">
            <div className="d-flex justify-content-center">
              <div className="card mt-5 col-md-4 mx-auto">
                <header>
                  <h1>
                    Great to see you again!
                  </h1>
                </header>

                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="inputLabel">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username / email"></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="inputLabel">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                  </div>
                  <button type="submit" className="btn btn-primary submit">Submit</button>
                </form>



        <footer className="section">
          <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <span><a href="https://app.zeplin.io/forgot-password">Forgot Password?</a></span>
                    <span>Don't have an account? <a href="https://app.zeplin.io/register">Get started</a></span>
                </div>
                <div  className="col" id="downloadApp">
                    <span>
                        Looking for the
                        <span className="mac">Mac</span><span className="windows">Windows</span> app?
                        <a href="https://app.zeplin.io/downloads" className="downloadsLink">Download here</a>
                        <a href="https://zpl.io/download-mac" id="macDownloadLink">Download here</a>
                        <a href="https://zpl.io/download-windows-64" id="windowsDownloadLink">Download here</a>
                    </span>
                </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>

      </>
    );
  }
}

export default App;
