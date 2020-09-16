import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Buttons from "./Components/buttons";

let city = null;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      location: null,
      description: null,
      icon: null,
      country: null,
    };
  }
  getCity = (location) => {
    city = location;
    this.getWeather();
  };

  getWeather = async () => {
    let apikey = process.env.REACT_APP_KEY;
    let url;
    if (city) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${apikey}&units=metric`;
    }
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    this.setState({
      weather: data,
      location: data.name,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      country: data.sys.country,
    });
  };
  componentDidMount() {
    this.getWeather();
  }
  render() {
    return (
      <div className="container-fluid row meo ">
        <Buttons getCity={this.getCity} />

        <div className={`col bg-primary ga ${city}`}>
          <div className="container-fluid text-white my-auto news-container rounded">
            <div className="container mx-auto my-4 py-4">
              <div className="row justify-content-center text-center">
                <h1 className="col-12 display-4 my-2 py-3 text-white">
                  Awesome Weather App
                </h1>
                <h2 className="col-12">
                  Location: {this.state.location} , {this.state.country}
                </h2>
                <h3 className="col-12 ">
                  Temperature:{" "}
                  {this.state.weather && this.state.weather.main.temp} °C
                </h3>
                <h3 className="col-12">
                  {this.state.description && this.state.description}
                  <img
                    src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
                    alt="Ga"
                  />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      // <h1> Seoul: {this.state.weather && this.state.weather.main.temp} </h1>
    );
  }
}
