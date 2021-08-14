import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchEvents } from "../../actions/eventsAction";

import Button from "../../components/Button";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  renderEvents = () => {
    const { events, userId } = this.props;

    return events
      .filter((event) => event.userId === userId)
      .map((event) => (
        <div
          key={event.id}
          className="
            my-2 py-2 w-full 
            border-b-2 border-gray-300
            flex content-between items-center border-solid 
          "
        >
          <div className="flex-1">
            <Link to={`/dashboard/events/${event.id}`}>
              <p className="font-medium text-lg">{event.name}</p>
            </Link>
            <span className="text-sm text-gray-600 ml-1">
              <b>{event.bookedSeats.length} </b>
              Joined
            </span>
          </div>

          <div className="flex content-around">
            <Link to={`/dashboard/events/edit/${event.id}`}>
              <Button variant="info" size="md">
                Edit
              </Button>
            </Link>
            <Link to={`/dashboard/events/delete/${event.id}`} className="ml-2">
              <Button variant="danger" size="md">
                Delete
              </Button>
            </Link>
          </div>
        </div>
      ));
  };

  render() {
    const { events } = this.props;
    return (
      <section className="relative my-16 h-52 container mx-auto px-2">
        <div className="py-2">
          <h1 className="font-bold text-2xl">Dashboard</h1>

          <div className="my-4">
            <div className="my-2 flex justify-between items-center ">
              <p className="font-medium text-md text-gray-600">Events</p>
              <Link to="/dashboard/events/new">
                <Button variant="dark" size="md">
                  Add Event
                </Button>
              </Link>
            </div>

            <div className="relative my-2">
              {events ? this.renderEvents() : <p>Loading ...</p>}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    userId: state.user.userId,
  };
};

export default connect(mapStateToProps, { fetchEvents })(Dashboard);
