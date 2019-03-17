import React, { Component } from 'react';

// includes (css)
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <>
        <div className="section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 offset-md-4">
                <header>
                  <h1>
                    Great to see you again!
                  </h1>
                </header>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 offset-md-4">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>

              </div>
            </div>
          </div>
        </div>

        <footer className="section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 offset-md-4">
                .col-md-4 .offset-md-4
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
