import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Input, Button, Header, Label, ErrorMessage } from "../UI/Styled";

export default class index extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    registerError: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      registerError: ""
    });
  };

  onFormSubmit = () => {
    const model = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    fetch(`${process.env.REACT_APP_API_URL}/register`, {
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
      .then(data => this.props.onRegister(data))
      .catch(err =>
        this.setState({
          registerError: "Unable to registrate. Try again later"
        })
      );
  };

  render() {
    return this.props.isUserAuthenticated ? (
      <Redirect to="/" />
    ) : (
      <Form>
        <Header> Register </Header>
        <ErrorMessage> {this.state.registerError} </ErrorMessage>
        <Label htmlFor="name"> name </Label>
        <Input name="name" onChange={this.handleInputChange} />
        <Label htmlFor="email"> email </Label>
        <Input name="email" onChange={this.handleInputChange} />
        <Label htmlFor="password"> password </Label>
        <Input
          name="password"
          type="password"
          onChange={this.handleInputChange}
        />
        <Button
          onClick={this.onFormSubmit}
          type="button"
          disabled={
            !this.state.name || !this.state.email || !this.state.password
          }
        >
          register
        </Button>
      </Form>
    );
  }
}
