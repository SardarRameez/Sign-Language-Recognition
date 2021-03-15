import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { AboutUs } from './Components/AboutUs';
import { Home } from './Components/Home';
import { SignDetection } from './Components/SignDetection';
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  // callAPI() {
  //   fetch("http://localhost:9000/testAPI")
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res }));
  // }

  // componentWillMount() {
  //   this.callAPI();
  // }

  render() {
    return (
      <BrowserRouter>
        <NavBar></NavBar>
        <div className={"sign_lang"}>
          <h3>Sign <br></br> Language</h3>
        </div>
        {/* <p className="App-intro" style={{position: 'fixed',textAlign:'center',bottom:'0px',width:'100%' }}>{this.state.apiResponse}</p> */}
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
          <Route path="/signdetection" element={<SignDetection></SignDetection>}></Route>
          <Route path="*" element={<h2>Page Not Found</h2>}></Route>
        </Routes>
       
      </BrowserRouter>
    );
  }
}

export default App;


