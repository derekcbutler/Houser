import React from "react";
import House from "../House/House";
import { Link } from 'react-router-dom';
import './dashboard.css'

class Dashboard extends React.Component {
  constructor(){
    super();

    this.state = {
      listings: [ ]
    }
  }


  render() {
    return (
      <div>
        <div>
          Dashboard
          <Link to='/wizard'><button>Add New Property</button></Link>
        </div>
        <div>
          <House
          inventory={this.listings} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
