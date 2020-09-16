import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <div className="col-1 bg-secondary button-con">
        <button
          type="button"
          onClick={() => this.props.getCity("Tokyo")}
          className=" btn-primary"
        >
          Tokyo
        </button>
        <button
          type="button"
          onClick={() => this.props.getCity("Hanoi")}
          className=" btn-light"
        >
          Hanoi
        </button>
        <button
          type="button"
          onClick={() => this.props.getCity("Taipei")}
          className=" btn-success"
        >
          Taipei
        </button>
        <button
          type="button"
          onClick={() => this.props.getCity("Rome")}
          className=" btn-danger"
        >
          Rome
        </button>
        <button
          type="button"
          onClick={() => this.props.getCity("Paris")}
          className=" btn-warning"
        >
          Paris
        </button>
        <button
          type="button"
          onClick={() => this.props.getCity("Wellington")}
          className=" btn-info"
        >
          Wellington
        </button>
        <button
          type="button"
          onClick={() => this.props.getCity("Athens")}
          className=" btn-light"
        >
          Athens
        </button>
        <button
          type="button"
          onClick={() => this.props.getCity("Vienna")}
          className=" btn-dark"
        >
          Vienna
        </button>
      </div>
    );
  }
}
