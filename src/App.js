import React, {Component} from "react";
import {voteAngular, voteReact, voteVuejs} from "./actions";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }
  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h2> What is your Favorite FrontEnd Framework in 2017 ? </h2>
          <div className="clearfix mgbtm20"></div>
          <div className="text-center">
            <img src="sushil.jpg" className="img-circle" alt="Angular" height="95"/>
          </div>
          <div className="clearfix mgbtm20"></div>
          <h4> Click on the Logos below to vote: </h4>
          <hr/>
          <div className="row vote-box">
            <div className="col-xs-offset-3 col-xs-2">
              <img src="angular_logo.png" alt="Angular" height="95" onClick={this.handleVoteAngular}/>
            </div>
            <div className="col-xs-2">
              <img src="react_logo.png" alt="Angular" height="95" onClick={this.handleVoteReact}/>
            </div>
            <div className="col-xs-2">
              <img src="vuejs_logo.png" alt="Angular" height="95" onClick={this.handleVoteVuejs}/>
            </div>
          </div>

        </div>
      </div>

    );
  }
}

export default App;
