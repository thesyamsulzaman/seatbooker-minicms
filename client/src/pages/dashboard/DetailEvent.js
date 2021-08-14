import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchEvent } from "../../actions/eventsAction";

class DetailEvent extends Component {
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id);
  }

  renderEventRows = () => {
    return this.props.event.bookedSeats.map((seat, index) => {
      return (
        <tr key={index}>
          <td>{seat.seatCode}</td>
          <td>{seat.fullName}</td>
          <td>{seat.email}</td>
        </tr>
      );
    });
  };

  render() {
    const { event } = this.props;
    return (
      <section className="relative my-16 h-52 container mx-auto px-2">
        <div className="py-3">
          <h1 className="font-bold text-2xl">Event Info</h1>
          <table className="my-4">
            <thead className="w-full">
              <tr className="w-full">
                <th>Seat Code</th>
                <th>First Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {event.bookedSeats.length > 0 ? (
                this.renderEventRows()
              ) : (
                <tr>
                  <td>
                    <p>Loading ...</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
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

export default connect(mapStateToProps, { fetchEvent })(DetailEvent);
