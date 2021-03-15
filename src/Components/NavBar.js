import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"100%"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  btn:{
      textTransform:"capitalize",
      fontSize:"20px",
      marginRight:"50px",
      padding:"5px"
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const navigate=useNavigate();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{width:"100%"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Button color="inherit" className={classes.btn} onClick={()=>{navigate("/")}}>Sign Language Recognition</Button>
          </Typography>
          <Button color="inherit" className={classes.btn} onClick={()=>{navigate("/aboutus")}}>About Us</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

