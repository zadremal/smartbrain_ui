import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, Input, Button, Header, Label, RegisterLink } from "./Styled";

export default class SingIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = e => {
    this.props.onSingin();
    console.log(this.state);
  };

  render() {
    return this.props.isUserAuthenticated ? (
      <Redirect to="/" />
    ) : (
      <Form>
        <Header> Sing In </Header>
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
