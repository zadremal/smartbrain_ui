import React, { Component } from "react";
import Rank from "../../components/Rank";
import Image from "../../components/Image";
import Form from "../../components/Form";

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
    fetch(`${process.env.REACT_APP_API_URL}/imageRecognition`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imageUrl: photoUrl
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          this.setState(
            {
              imageUrl: photoUrl
            },
            () => this.setRegions(data)
          );
          fetch(`${process.env.REACT_APP_API_URL}/image`, {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.props.currentUser.id
            })
          })
            .then(resp => resp.ok && resp.json())
            .then(data => this.props.onRankUpdate(data))
            .catch(err => console.error(err));
        }
      })
      .catch(err => console.error(err));
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
