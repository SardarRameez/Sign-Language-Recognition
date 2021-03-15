import React from 'react'
import Grid from '@material-ui/core/Grid'
import img from '.././img/detection.png'
import { makeStyles } from '@material-ui/core/styles';
// import {setDetection} from './SignDetection'
// import { useState } from 'react';
// import { SignDetection } from './SignDetection';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

export const Home = () => {
    const classes = useStyles();
    const navigate= useNavigate();
    return (
        <div >   
           <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Grid item style={{marginTop:"100px"}}>
                          {/* <button onClick={()=>{<SignDetection></SignDetection>}}> */}
                                <img src={img} width="250px" height="250px" alt="Sign Detection" onClick={()=>{navigate("/signdetection")}}></img>
                          {/* </button> */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
