import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchEvents } from "../actions/eventsAction";

import SearchBar from "../components/SearchBar";
import EventCard from "../components/EventCard";

class Home extends Component {
  state = { searchTerm: "" };

  componentDidMount() {
    this.props.fetchEvents();
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchTerm } = this.state;

    if (prevState.searchTerm !== searchTerm) {
      this.props.fetchEvents(searchTerm);
    }
  }

  handleSearchFormSubmit = (searchTerm) => {
    this.setState({ searchTerm });
  };

  renderEventCards() {
    return this.props.events.map(
      ({ id, name, schedules, bookedSeats, seats, address }) => {
        return (
          <EventCard
            key={id}
            id={id}
            name={name}
            schedule={schedules[0]}
            address={address}
            bookedSeats={bookedSeats}
            seats={seats}
          />
        );
      }
    );
  }

  render() {
    const { events } = this.props;

    return (
      <React.Fragment>
        <section className="relative h-96 z-20 overflow-hidden">
          <div
            className="
            h-full w-full opacity-95
            absolute z-40 bg-gray-700
            flex items-center justify-center
          "
          >
            <div className="w-3/4 lg:w-2/4">
              <h1 className="text-white text-2xl text-center">
                Search for Events
              </h1>
              <SearchBar onSearchFormSubmit={this.handleSearchFormSubmit} />
            </div>
          </div>
        </section>
        <section className="relative container mx-auto h-auto min-h-screen w-full px-2 py-5">
          <h1 className="text-2xl font-bold">Recent Events</h1>

          <div
            className="
              my-3 container 
              items-start justify-content-center 
              grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            "
          >
            {events.length > 0 ? this.renderEventCards() : <h1>Loading ...</h1>}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { events: state.events };
};

export default connect(mapStateToProps, { fetchEvents })(Home);
