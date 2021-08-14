import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

import { logout } from "../actions/userAction";

export class Header extends Component {
  render() {
    return (
      <header className="bg-gray-800 py-2 shadow-lg fixed top-0 inset-x-0 w-full z-30">
        <nav className="container mx-auto flex justify-between items-center">
          <Logo />
          <div className="p-2">
            {this.props.isAuthenticated ? (
              <React.Fragment>
                <Link
                  to="/dashboard"
                  className="bg-gray-900 px-3 py-2 mr-3 text-white font-bold rounded"
                >
                  Dashboard
                </Link>

                <button
                  className="text-white"
                  onClick={(e) => this.props.logout()}
                >
                  Logout
                </button>
              </React.Fragment>
            ) : (
              <Link
                to="/users/login"
                className="bg-gray-900 px-3 py-2 text-white font-bold rounded"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return { isAuthenticated: state.user.isAuthenticated };
};

export default connect(mapStateToProps, { logout })(Header);
