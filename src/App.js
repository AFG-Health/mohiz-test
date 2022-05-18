/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [apiPosts, setApiPosts] = useState([]);

  useEffect(() => {
    console.log('effecting')
    axios.post(`https://one-check-cache-prod.herokuapp.com/search/testingcenters`, {
      "testType":"PCR",
      "searchDate":"2022-05-19",
      "geoPoint": [45.497, 9.195]
    }).then((res) => {
      console.log(res, 'response');
    })
  }, [])

  return (
    <div className="App">
      App
    </div>
  );
}

export default connect(state => state)(App);
