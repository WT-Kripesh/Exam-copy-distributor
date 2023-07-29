import * as React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AuthenticatedContext from "../../Context/AuthenticatedContext";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
export default function ButtonAppBar() {
  // const authenticated = useContext(AuthenticatedContext);

  // const [session, setSession] = useState("");
  // useEffect(() => {
  //   fetch(process.env.REACT_APP_BASE_URL + "API/query/getSessionName")
  //     .then((res) => res.json())
  //     .then((json) => setSession(json.sessionName))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{minHeight: '150px', alignItems:'center',display:'flex',justifyContent: 'center'  }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
             <Link to="/">
            <img alt="TU logo" src="/images/logo.png" height="64" width="55" />
          </Link>
          </IconButton>
          <Link to="/admin"><Typography variant="h5" component="div" sx={{ flexGrow: 0.3 , color:'white'}}>
            Exam package management sys
          </Typography></Link>
         
          <Stack direction="row" spacing={2} sx={{ml:'400px' , flexGrow: 0.3}}>
          <Link to="/admin/session"><Typography variant="h8" component="div" sx={{ flexGrow: 0.5, color:'white' }}>
            Session
          </Typography></Link>
          <Link to="/admin/departments"><Typography variant="h8" component="div" sx={{ flexGrow: 1, color:'white' }}>
            Department
          </Typography></Link>
          <Link to="/admin/programs"><Typography variant="h8" component="div" sx={{ flexGrow: 0.5 , color:'white'}}>
            Program
          </Typography></Link>
          <Link to="/admin/subjects"><Typography variant="h8" component="div" sx={{ flexGrow: 0.5, color:'white' }}>
            Subject
          </Typography></Link>
          <Link to="/admin/exams"><Typography variant="h8" component="div" sx={{ flexGrow: 0.5 , color:'white'}}>
            Exam
          </Typography></Link>
          <Link to="/admin/packages"> <Typography variant="h8" component="div" sx={{ flexGrow: 0.5, color:'white' }}>
            Package
          </Typography></Link>
          <Link to="/admin/intermediate">  <Typography variant="h8" component="div" sx={{ flexGrow: 0.5, color:'white' }}>
            Person
          </Typography></Link>
          
          
          
          
          
         
          {/* <Avatar src="/broken-image.jpg" sx={{ flexGrow: 0.6, justifyContent:'center'}} /> */}
          
          <Link to ="/"><Button color="inherit" sx={{ flexGrow: 0.5, color:'white' }}>Login</Button></Link>
      </Stack>
      {/* {authenticated ? (
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
        )} */}
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
