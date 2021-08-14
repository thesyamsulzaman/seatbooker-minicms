import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Button from "../components/Button";
import Input from "../components/Input";

import usersService from "../lib/users.service";

import { login } from "../actions/userAction";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  onInputChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    usersService()
      .login({ username, password })
      .then((res) => {
        this.props.login(res.userId, res.accessToken);
      })
      .catch((err) => console.error(err.message));
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

    const { username, password } = this.state;
    return (
      <section className="relative my-32 container mx-auto px-2 flex items-center justify-center">
        <form onSubmit={this.onSubmitHandler} className="border-solid">
          <h1 className="text-2xl text-center"> Login admin </h1>

          <div className="my-2">
            <label htmlFor="" className="block">
              Username
            </label>
            <Input
              type="text"
              name="username"
              required
              value={username}
              onChange={this.onInputChangeHandler}
            />
          </div>

          <div className="my-2">
            <label htmlFor="" className="block">
              Password
            </label>
            <Input
              type="password"
              name="password"
              required
              value={password}
              onChange={this.onInputChangeHandler}
            />
          </div>

          <div className="my-2">
            <Button type="submit" variant="dark" size="md" block>
              Login
            </Button>
          </div>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { isAuthenticated: state.user.isAuthenticated };
};

export default connect(mapStateToProps, { login })(Login);
