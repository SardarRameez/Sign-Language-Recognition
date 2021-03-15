import React, { useRef,  useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import {drawRect} from "./utilities"; 
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";
import Grid from '@material-ui/core/Grid';


export const SignDetection = () => {
  let clear;
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const navigate= useNavigate();

    // Main function
  const runCoco = async () => {
    const net = await tf.loadGraphModel('https://pakistansignlanguagerecognition.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json')
    
    //  Loop and detect hands
    clear=setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [640,480])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)
      console.log(obj)

      const boxes = await obj[1].array()
      const classes = await obj[2].array()
      const scores = await obj[4].array()
      
      // Draw mesh
      if(canvasRef.current!=null){
        const ctx = canvasRef.current.getContext("2d");

        // 5. TODO - Update drawing utility
        // drawSomething(obj, ctx)  
        requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.7, videoWidth, videoHeight, ctx)}); 
      }
      // const ctx = canvasRef.current.getContext("2d");

      // // 5. TODO - Update drawing utility
      // // drawSomething(obj, ctx)  
      // requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.6, videoWidth, videoHeight, ctx)}); 

      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)

    }
  };

  // const stopDetection=()=>{
  //   let promise = new Promise((resolve, reject)=>{
  //     clearInterval(clear)
  //     console.log("clearing interval")
  //     resolve("Clear Interval")
  //   });
  //   return promise;
  // }
  useEffect(()=>{runCoco()});

  async function startProcess(){
      clearInterval(clear)
      navigate("/")
  }
    return (
        <div>
            <header className="App-header">
                <Webcam
                ref={webcamRef}
                muted={true} 
                style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    zindex: 9,
                    width: 640,
                    height: 480,
                }}
                />

                <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    zindex: 8,
                    width: 640,
                    height: 480,
                }}
                />
            </header>
            <Grid container style={{marginTop:"0px"}}>
            <Grid item xs={1} sm={1} md={4}>
            </Grid>
            <Grid item xs={10} sm={6} md={4} style={{margin:"20px 0px 20px 20px", textAlign:"justify", color:"white"}}>
              <Button variant="contained" color="primary" onClick={()=>{startProcess()}} style={{margin:"auto"}}>
                Stop Detection
              </Button>
            </Grid>
            <Grid item xs={6} md={4}>
            </Grid>
        </Grid>
        </div>
    )
}
