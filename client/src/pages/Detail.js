import React, { Component } from "react";
import { createPortal } from "react-dom";
import { connect } from "react-redux";

import { CallendarIcon, LocationIcon, InfoIcon, ChairIcon } from "../lib/icons";
import { seatFixtures, mergeWithFixture } from "../lib/seats-fixture";

import Button from "../components/Button";
import Input from "../components/Input";

import { fetchEvent, addBookedSeat } from "../actions/eventsAction";

class Detail extends Component {
  state = {
    selectedSeat: null,
    showModal: false,
  };

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id);
  }

  onSeatSelectHandler = (seat) => {
    this.setState({ selectedSeat: seat, showModal: true });
  };

  onInputChange = (e) => {
    e.persist();
    this.setState((prevState) => ({
      selectedSeat: {
        ...prevState.selectedSeat,
        [e.target.name]: e.target.value,
      },
    }));
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { selectedSeat } = this.state;

    this.props.addBookedSeat(this.props.match.params.id, selectedSeat);
    this.setState({ showModal: false });
  };

  renderCheckoutModal(selectedSeat) {
    const {
      selectedSeat: { fullName, email, isBooked, isAvailable },
    } = this.state;

    return (
      !isBooked &&
      isAvailable &&
      createPortal(
        <div
          onClick={() => this.setState({ showModal: false })}
          className="
          bg-gray-900
          fixed inset-0 z-40 h-screen 
          flex justify-center items-center 
        "
        >
          <div
            className="p-3 bg-white rounded shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={this.onFormSubmit}>
              <div className="my-2">
                <label htmlFor="" className="block mb-1">
                  Seat Code
                </label>
                <Input value={selectedSeat.seatCode} readOnly />
              </div>
              <div className="my-2">
                <label htmlFor="" className="block mb-1">
                  Full Name
                </label>
                <Input
                  required
                  name="fullName"
                  value={fullName}
                  onChange={this.onInputChange}
                  autoComplete="off"
                />
              </div>
              <div className="my-2">
                <label htmlFor="" className="block mb-1">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={this.onInputChange}
                  autoComplete="off"
                />
              </div>
              <div className="flex content-around my-2">
                <Button variant="dark" type="submit" block size="md">
                  Book the chair
                </Button>
                <Button
                  variant="info"
                  size="md"
                  classes="ml-2"
                  onClick={() => this.setState({ showModal: false })}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>,
        document.getElementById("modal")
      )
    );
  }

  renderEventSeats(seats, bookedSeats) {
    const seatObjects =
      bookedSeats.length > 0
        ? mergeWithFixture({
            mergableArray: bookedSeats,
            maximumMerge: seats,
            fixture: seatFixtures,
          })
        : seatFixtures;

    return seatObjects.map((seat, index) => {
      return (
        <div
          onClick={() => this.onSeatSelectHandler(seat)}
          key={seat.seatCode}
          className={`
            p-3 rounded-md 
            hover:bg-gray-300 
            flex flex-col items-center
            border-solid border-2 border-gray-800 
            ${index + 1 > seats && "opacity-40"}
            ${seat.isBooked && "bg-gray-500"}
          `}
        >
          <ChairIcon classes="h-8 w-8 text-black" />

          {seat.isBooked && (
            <span className="text-white font-bold text-sm">Booked</span>
          )}
        </div>
      );
    });
  }

  renderEventDetail({
    name,
    address,
    speakers,
    seats,
    schedules,
    bookedSeats,
  }) {
    return (
      <React.Fragment>
        <img
          src="/googlemap.png"
          alt="location"
          className="
            mb-2 
            h-52 w-full 
            object-cover object-right-bottom 
            border-solid border-4 border-gray-200 rounded-md
          "
        />
        <div className="px-3 py-4">
          <h1 className="text-4xl text-gray-800 font-medium">{name}</h1>

          <div className="my-5">
            <div className="my-2 flex items-center">
              <LocationIcon classes="h-6 w-6 text-gray-600" />
              <span className="text-gray-600 text-md ml-2">{address}</span>
            </div>

            <div className="my-2 flex items-center">
              <InfoIcon classes="h-6 w-6 text-gray-600" />
              {speakers.map((speaker, index) => (
                <span key={index} className="text-gray-600 text-md ml-2">
                  {speaker.name},
                </span>
              ))}
            </div>
          </div>

          <div className="my-5">
            <h1 className="text-2xl text-gray-800 font-medium">Schedules</h1>
            {schedules.map((schedule, index) => {
              return (
                <div className="my-3" key={index}>
                  <div className="my-2 flex items-start justify-between">
                    <div>
                      <p className="text-lg text-gray-600 font-medium mb-1">
                        {schedule.title}
                      </p>
                      <div className="flex items-center">
                        <CallendarIcon classes="h-5 w-5 text-gray-500" />
                        <span className="text-sm text-gray-500 ml-1">
                          {schedule.date}
                        </span>
                      </div>
                    </div>
                    <p className="text-md text-gray-600">
                      {schedule.startsAt} - {schedule.endsAt}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="my-5">
            <h1 className="text-2xl text-gray-800 font-medium">Seats</h1>
            <div className="mt-2 mb-8 rounded bg-gray-600 w-full h-20 p-3">
              <p className="text-center text-2xl">Stage</p>
            </div>
            <div className="my-3 grid items-start justify-content-center gap-3 grid-cols-4">
              {this.renderEventSeats(seats, bookedSeats)}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  render() {
    const { event } = this.props;
    const { selectedSeat, showModal } = this.state;

    return (
      <section className="relative my-16 h-52 container mx-auto px-2">
        {event ? this.renderEventDetail(event) : <h1>Loading...</h1>}
        {selectedSeat && showModal && this.renderCheckoutModal(selectedSeat)}
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

export default connect(mapStateToProps, { fetchEvent, addBookedSeat })(Detail);
