import React, { Component } from "react";
import Clarifai from "clarifai";
import Rank from "../../components/Rank";
import Image from "../../components/Image";
import Form from "../../components/Form";

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFI_API_KEY
});

class Mainscreen extends Component {
  state = {
    input: "",
    imageUrl: "",
    regions: [],
    imageWidth: "",
    imageHeight: ""
  };

  setRegions = data => {
    const element = document.getElementById("analized-image");
    this.setState({
      regions: data.outputs[0].data.regions,
      imageWidth: element.width,
      imageHeight: element.height
    });
  };

  onInputChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const photoUrl = this.state.input;
    this.setState({
      imageUrl: photoUrl
    });
    app.models
      .predict("a403429f2ddf4b49b307e318f00e528b", photoUrl)
      .then(response => {
        response &&
          fetch("http://localhost:3000/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.props.currentUser.id
            })
          })
            .then(resp => resp.ok && resp.json())
            .then(data => this.props.onRankUpdate(data));
        this.setRegions(response);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { input, regions, imageUrl, imageHeight, imageWidth } = this.state;
    return (
      <div className="container main">
        <div className="row">
          <div className="col-xs-12 center-xs">
            <Rank currentUser={this.props.currentUser} />
          </div>
          <div className="col-xs-12 center-xs">
            <Form
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
              value={input}
            />
          </div>
          <div className="col-xs-12 center-xs">
            <Image
              regions={regions}
              imageUrl={imageUrl}
              height={imageHeight}
              width={imageWidth}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Mainscreen;
