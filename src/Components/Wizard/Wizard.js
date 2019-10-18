import React from "react";
import { Link } from "react-router-dom";
import "./wizard.css";

class Wizard extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div id="body">
        <div className="top">
          Add New Listing
          <Link to="/">
            <button className="cancel">Cancel</button>
          </Link>
        </div>
        <div className="input-boxes">
          <div className="name">
            <div className="title1">Property Name</div>
            <input
              className="name"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
              type="text"
            />
          </div>
          <div className='name'>
            <div className='title1'>Address</div>
            
            <input className="address"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
              type="text"/>
          </div>
          <div className='title1'>
            City
            <input />
            State
            <input />
            Zip
            <input />
          </div>
          <button>Complete</button>
        </div>
      </div>
    );
  }
}

export default Wizard;
