import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Input, Button, Header, Label } from "./Styled";

export default class index extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = () => {
    const model = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    fetch("http://localhost:3000/register", {
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
        <Header> Register </Header>
        <Label htmlFor="name"> name </Label>
        <Input name="name" onChange={this.handleInputChange} />
        <Label htmlFor="email"> email </Label>
        <Input name="email" onChange={this.handleInputChange} />
        <Label htmlFor="password"> password </Label>
        <Input name="password" onChange={this.handleInputChange} />
        <Button onClick={this.onFormSubmit} type="button">
          register
        </Button>
      </Form>
    );
  }
}
