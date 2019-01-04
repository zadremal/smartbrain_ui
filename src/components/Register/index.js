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

  onFormSubmit = e => {
    console.log(this.state);
    this.props.onRegister();
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
