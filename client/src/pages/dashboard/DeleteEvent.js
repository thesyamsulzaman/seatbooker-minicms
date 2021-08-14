import React, { Component } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Button from "../../components/Button";
import history from "../../lib/history";

import { fetchEvent, deleteEvent } from "../../actions/eventsAction";

class DeleteEvent extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchEvent(id);
  }

  deleteEventHandler = (id) => {
    this.props.deleteEvent(id);
  };

  render() {
    return (
      <section className="relative my-16 h-52 container mx-auto px-2">
        {createPortal(
          <div
            onClick={() => history.push("/dashboard")}
            className="
              bg-gray-900 opacity-80
              fixed inset-0 z-40 h-screen 
              flex justify-center items-center 
            "
          >
            <div className="p-3 bg-white rounded shadow-md">
              <h1 className="text-center text-2xl">Are you sure ?</h1>
              <div className="flex content-around my-2">
                <Button
                  variant="danger"
                  size="md"
                  onClick={() =>
                    this.deleteEventHandler(this.props.match.params.id)
                  }
                >
                  Delete
                </Button>
                <Link to={`/dashboard`} className="ml-2">
                  <Button variant="info" size="md">
                    Cancel
                  </Button>
                </Link>
              </div>
            </div>
          </div>,
          document.getElementById("modal")
        )}
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    event: state.events.find((event) => event.id === parseInt(id)),
  };
};

export default connect(mapStateToProps, { fetchEvent, deleteEvent })(
  DeleteEvent
);
