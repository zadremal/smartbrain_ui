import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Header,
  Label,
  RegisterLink,
  ErrorMessage
} from "./Styled";

export default class SingIn extends Component {
  state = {
    email: "",
    password: "",
    singinError: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      singinError: ""
    });
  };
  // .catch(err => this.setState({ backendError: err }))

  onFormSubmit = () => {
    const model = {
      email: this.state.email,
      password: this.state.password
    };

    fetch("http://localhost:3000/singin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(model)
    })
      .then(resp => {
        if (!resp.ok) {
          throw resp;
        }
        return resp.json();
      })
      .then(data => this.props.onSingin(data))
      .catch(err =>
        err
          .json()
          .then(errorResponse => this.setState({ singinError: errorResponse }))
      );
  };

  render() {
    return this.props.isUserAuthenticated ? (
      <Redirect to="/" />
    ) : (
      <Form>
        <Header> Sing In </Header>
        <ErrorMessage> {this.state.singinError} </ErrorMessage>
        <Label htmlFor="email"> email </Label>
        <Input name="email" onChange={this.handleInputChange} />
        <Label htmlFor="password"> password </Label>
        <Input name="password" onChange={this.handleInputChange} />
        <Button onClick={this.onFormSubmit} type="button">
          sing in
        </Button>
        <RegisterLink>
          <Link to="/register"> register </Link>
        </RegisterLink>
      </Form>
    );
  }
}
