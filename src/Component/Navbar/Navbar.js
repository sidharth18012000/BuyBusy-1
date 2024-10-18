// custom context hook
import { useAuthValue } from "../../authContext";
import "bootstrap/dist/css/bootstrap.css";
// css styles
import styles from "../../styles/navbar.module.css";
// import form react router
import { Outlet, NavLink } from "react-router-dom";

// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faHome,
  faBagShopping,
  faCartShopping,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

// Navbar Component
export default function Navbar() {
  // user's login status
  const { isLoggedIn, signOut } = useAuthValue();

  return (
    <>
      {/* main container */}
      <div
        className={styles.navbarContainer}
        data-bs-theme="dark"
        style={{ backgroundColor: "green" }}
      >
        {/* app heading */}
        <div className={styles.appName}>
          <NavLink to="/">
            {/* logo of the app */}

            <a className="navbar-brand" href="/">
              <img
                src="https://www.svgrepo.com/show/217771/shopping-logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
              Buy Busy
            </a>
          </NavLink>
        </div>
        {/* all the navigation link */}
        <div className={styles.navLinks}>
          {/* homepage link */}
          <NavLink to="/">
            <span>
              {/* home logo */}
              <FontAwesomeIcon icon={faHome} />
              Home
            </span>
          </NavLink>

          {/* myorder link */}
          {/* show when the user is logged in */}
          {isLoggedIn && (
            <NavLink to="/myorder">
              <span>
                {/* my order logo */}
                <FontAwesomeIcon icon={faBagShopping} />
                My Order
              </span>
            </NavLink>
          )}

          {/* cart link */}
          {/* show when the user is logged in */}
          {isLoggedIn && (
            <NavLink to="/cart">
              <span>
                {/* cart icon */}
                <FontAwesomeIcon icon={faCartShopping} />
                Cart
              </span>
            </NavLink>
          )}

          {/* for signIN and signOut */}
          <NavLink to={!isLoggedIn ? "/signin" : "/"}>
            <span>
              {!isLoggedIn ? (
                <>
                  {/* sign in icon */}
                  <FontAwesomeIcon icon={faRightToBracket} />
                  SignIn
                </>
              ) : (
                <>
                  {/* sign out icon */}
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  {/* sign out user  */}
                  <span onClick={signOut}>SignOut</span>
                </>
              )}
            </span>
          </NavLink>
        </div>
      </div>
      {/* render child pages */}
      <Outlet />
    </>
  );
}
