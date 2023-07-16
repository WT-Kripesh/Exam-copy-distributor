import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import SideNav from "./SideNav/sidenav.js";
import { useContext } from "react";
import AuthenticatedContext from "../../Context/AuthenticatedContext";

const Header = (props) => {
  const authenticated = useContext(AuthenticatedContext);

  const [session, setSession] = useState("");
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + "API/query/getSessionName")
      .then((res) => res.json())
      .then((json) => setSession(json.sessionName))
      .catch((err) => console.log(err));
  }, []);

  const NavBar = () => {
    return (
      <div onClick={props.onOpenNav} className="bars">
        <FontAwesomeIcon icon={faBars} className="bars-icon" />
      </div>
    );
  };
  return (
    <div className="header">
      <SideNav {...props} />
      <div className="main-header">
        {NavBar()}
        <div className="logo">
          <Link to="/">
            <img alt="TU logo" src="/images/logo.png" height="64" width="55" />
          </Link>
        </div>
        <div className="text-area">
          <div className="main-title row">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Exam Package Management System
            </Link>
            <h6 className=" text-secondary w-100 text-center">{session}</h6>
          </div>
        </div>
        {authenticated ? (
          <div className="user-logo">
            <button
              onClick={() => {
                fetch("/API/logout").then(() => {
                  window.location.href = "/";
                  window.location.reload();
                });
              }}
              className="btn btn-link"
              style={{
                fontSize: "1em",
              }}
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ color: "white" }}
                className="user-icon"
              />
            </button>
          </div>
        ) : (
          <div className="user-logo">
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FontAwesomeIcon icon={faUser} className="user-icon" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;