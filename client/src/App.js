import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./lib/PrivateRoute";

import { loadUser } from "./actions/userAction";
import store from "./store";
import history from "./lib/history";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";

import Dashboard from "./pages/dashboard/Dashboard";
import CreateEvent from "./pages/dashboard/CreateEvent";
import DeleteEvent from "./pages/dashboard/DeleteEvent";
import EditEvent from "./pages/dashboard/EditEvent";
import DetailEvent from "./pages/dashboard/DetailEvent";

import Header from "./containers/Header";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/events/:id" component={Detail} />
            <Route path="/users/login" component={Login} />

            <PrivateRoute exact path="/dashboard" component={Dashboard} />

            <PrivateRoute
              path="/dashboard/events/new"
              component={CreateEvent}
            />

            <PrivateRoute
              exact
              path="/dashboard/events/:id"
              component={DetailEvent}
            />

            <PrivateRoute
              path="/dashboard/events/edit/:id"
              component={EditEvent}
            />

            <PrivateRoute
              path="/dashboard/events/delete/:id"
              component={DeleteEvent}
            />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
