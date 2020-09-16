import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
    };
  }

  getWeather = async () => {
    let apikey = process.env.REACT_APP_KEY;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${apikey}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    this.setState({ weather: data });
  };
  componentDidMount() {
    this.getWeather();
  }
  render() {
    return (
      <h1> Seoul: {this.state.weather && this.state.weather.main.temp} </h1>
    );
  }
}
