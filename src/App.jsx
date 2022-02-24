import React from "react";
import "./App.css";
import profile from "./profile.jpg";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "redouaneFaras",
        bio: "professional transition from SupplyChain Manager to FullStack Developer with MERN.js",
        imgSrc: profile,
        profession: "MERN Stack Student",
      },
      show: false,
      count: 0,
      st: "shown",
    };
  }

  incrementCounter = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  componentDidMount() {
    setInterval(this.incrementCounter, 1000);
  }

 
  showHide = () => {
    this.setState({
      show: !this.state.show, count:0, st: "hidden",
    }); 
    
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.showHide}>
          {this.state.show ? "Hide Profile" : "Show Profile"}
        </button>
        {this.state.show && (
          <div className="profile-card">
            <div className="profile-img">
              <img src={this.state.person.imgSrc} alt="profile"></img>
            </div>
            <div className="profile-content">
              <h1>{this.state.person.fullName}</h1>
              <h3>{this.state.person.profession}</h3>
              <p>{this.state.person.bio}</p>
            </div>
          </div>
        )}

        <h4>Profile {this.state.st} since</h4>
        <h3>{this.state.count} seconds</h3>
      </div>
    );
  }
}

export default App;
