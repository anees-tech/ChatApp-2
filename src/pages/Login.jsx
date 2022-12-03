import React from "react";
import "../Style/Style.scss";

function Login() {
  return (
    <>
      <div className="container">
        <div className="box">
          <span className="title">Login</span>
          <form>
            <div className="userName">
              <label htmlFor="userName">Enter User Name</label>
              <input id="userName" type="text" placeholder="User Name" />
            </div>
            <div className="password">
              <label htmlFor="Password">Enter Password</label>
              <input id="Password" type="Password" placeholder="Password" />
            </div>
            <button type="submit">Submit</button>
            <span>
              Want A New Account? <a href="SignUp">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
