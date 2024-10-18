//react ref hook
import { React, useRef } from "react";
//navigation router
import { useNavigate } from "react-router-dom";
//css import
import styles from "../styles/signIn.module.css";
// custom context hook (authentication)
import { useAuthValue } from "../authContext";

import "bootstrap/dist/css/bootstrap.css";

export function SignUp() {
  // ref variable for name, email, password
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  //Navigation variable
  const navigate = useNavigate();

  //function for crating new user
  const { createUser } = useAuthValue();

  //handle form sumission
  function handleSubmit(e) {
    e.preventDefault();

    //storing users data
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    //creating user
    createUser(data);
    //if user is created then we will dedirect to corresponding page
    navigate("/signin");
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.inputForm}>
          <center>
            <img
              class="mb-4"
              src="https://www.svgrepo.com/show/217771/shopping-logo.svg"
              alt=""
              width="72"
              height="72"
            ></img>

            {/* // heading */}
            <h1> Sign Up</h1>
          </center>

          {/* //form to get user data */}
          <form onSubmit={handleSubmit}>
            {/* //input field for name, email,password */}
            <input
              type="text"
              placeholder="Enter your name"
              ref={nameRef}
              required
            />
            {/* //for email */}
            <input
              type="email"
              placeholder="Enter your email"
              required
              ref={emailRef}
            />
            {/* for password */}
            <input
              type="password"
              placeholder="Enter Password"
              required
              ref={passwordRef}
            />
            {/* submit button */}
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
