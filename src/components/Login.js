import React from 'react'

const Login = () => {
    return (
        <div className="main-content-agile">
        <div className="sub-main-w3">
          <h2 className="entry-h2">Login
          </h2>
          <form action="#" method="post">
            <div className="pom-agile">
              <span className="fa fa-user-o" aria-hidden="true" />
              <input placeholder="Username" name="Name" className="user" type="text" required />
            </div>
            <div className="pom-agile">
              <span className="fa fa-key" aria-hidden="true" />
              <input placeholder="Password" name="Password" className="pass" type="password" required />
            </div>
            <div className="sub-w3l">
              <div className="sub-agile">
                <input type="checkbox" id="brand1" defaultValue />
                <label htmlFor="brand1">
                  <span />Remember me</label>
              </div>
              <div className="clear" />
            </div>
            <div className="right-w3l">
              <input type="submit" defaultValue="Login" value="Login"/>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Login;
