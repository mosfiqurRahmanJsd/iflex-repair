import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import './Login.css'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    // console.log(loggedInUser.name)

    const history = useHistory(); 
    const location = useLocation(); 

    const { from } = location.state || { from: { pathname: "/" } };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const provider = new firebase.auth.GoogleAuthProvider();

  const googleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const singedInUser = { name: displayName, email, photo: photoURL };
        setLoggedInUser(singedInUser)
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential)
        
      });
  };

  return (
    <div className="mt-5 pt-5">
      <div className="container container-sm-fluid ">
        <div className="sign-in">
          
          <button
            onClick={googleSignIn}
            className="google-btn btn border w-100 d-flex align-items-center"
          >
            <img
              className="img-fluid mt-2"
              src="https://i.ibb.co/R0cy8Yn/Group-571.png"
              alt=""
            />
            <h6 className="mx-auto">Continue with Google</h6>
          </button>
          <div className="separator my-3">Or</div>
        </div>
      </div>
      <div className="container-md">
        <div className="card d-block mx-auto login">
          <div className="card-body p-2 p-md-5">
            <h4>Login</h4>

            <form>
              <input
                className="form-control my-5 input"
                type="email"
                name="email"
                id=""
                placeholder="Email"
                required
              />
              <input
                className="form-control my-5 input"
                type="password"
                name="password"
                id=""
                placeholder="Password"
                required
              />

              <div className="d-flex justify-content-between ">
                <div>
                  <input
                    type="checkbox"
                    id="RememberPassword"
                    name="RememberPassword"
                    value="RememberPassword"
                  />
                  <label
                    style={{ paddingLeft: "5px", fontWeight: "600" }}
                    htmlFor="RememberPassword"
                  >
                    Remember Me
                  </label>
                </div>
                <Link className="link-color" to="/forgot_password">
                  Forgot Password
                </Link>
              </div>
              <input
                className="w-100 login-btn my-3"
                type="submit"
                value="Login"
              />
            </form>

            <p className="text-center mt-2">
              Don't Have Account ?{" "}
              <Link className="link-color" to="/signup">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
