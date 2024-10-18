//Using react hook
import { React, useRef } from "react";
//react router
import { NavLink, useNavigate } from "react-router-dom";
//css styles
import styles from "../styles/signIn.module.css";

import "bootstrap/dist/css/bootstrap.css";
// custom context hook (authentication)
import { useAuthValue } from "../authContext";

export function SignIn() {
  //Signin function
  const { signIn } = useAuthValue();

  //Navigate variable for Navigation
  const navigate = useNavigate();

  //ref variables for email, password
  const emailRef = useRef();
  const passwordRef = useRef();

  // Creating form Submit function
  async function handleSubmit(e) {
    e.preventDefault();
    //Storig user's data
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const status = await signIn(data);
    //if user signed in then redirect to corresponding page
    {
      status ? navigate("/") : navigate("/signIn");
    }
  }

  return (
    <>
      {/* //This is the main container of the page //First we will make this page */}
      <div className={styles.container}>
        <div className={styles.inputForm}>
          <br />
          <center>
            <img
              class="mb-4"
              src="https://www.svgrepo.com/show/217771/shopping-logo.svg"
              alt=""
              width="72"
              height="72"
            ></img>

            {/* //heading */}
            <h1> Sign In</h1>
          </center>
          {/* //form for sign in */}
          <form onSubmit={handleSubmit}>
            {/* //input email and password */}
            <input
              type="email"
              placeholder="Enter email"
              required
              ref={emailRef}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              required
              ref={passwordRef}
            />
            <br />
            {/* //button for onSubmit */}
            <center>
              <button> Submit</button>
            </center>
          </form>
          <br />
          <span>or &nbsp;</span>
          <NavLink to="/signup">Create New Account</NavLink>
        </div>
      </div>
    </>
  );
}
