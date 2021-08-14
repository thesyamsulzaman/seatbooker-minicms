import React, { Component } from "react";
import { connect } from "react-redux";

import { addEvent } from "../../actions/eventsAction";

import EventForm from "./form/EventForm";

class CreateEvent extends Component {
  onSubmit = (formValues) => {
    this.props.addEvent(formValues);
  };

  render() {
    return (
      <section className="relative my-16 h-52 container mx-auto px-2">
        <div className="py-3">
          <h1 className="font-bold text-2xl">Create New Event</h1>
          <EventForm onFormSubmit={this.onSubmit} />
        </div>
      </section>
    );
  }
}

export default connect(null, { addEvent })(CreateEvent);
