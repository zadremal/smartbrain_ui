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
} from "../UI/Styled";

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

  onFormSubmit = () => {
    console.log("api", process.env.REACT_APP_API_URL);
    const model = {
      email: this.state.email,
      password: this.state.password
    };

    fetch(`${process.env.REACT_APP_API_URL}/singin`, {
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
        this.setState({
          singinError: "Unable to singin. Try again later"
        })
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
        <Input
          name="password"
          type="password"
          onChange={this.handleInputChange}
        />
        <Button
          onClick={this.onFormSubmit}
          type="button"
          // disabled={!this.state.email || !this.state.password}
        >
          sing in
        </Button>
        <RegisterLink>
          <Link to="/register"> register </Link>
        </RegisterLink>
      </Form>
    );
  }
}
