import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchEvent, editEvent } from "../../actions/eventsAction";

import EventForm from "./form/EventForm";

class EditEvent extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchEvent(id);
  }

  onSubmit = (formValues) => {
    const { id } = this.props.match.params;
    this.props.editEvent(id, formValues);
  };

  render() {
    const { event } = this.props;
    return (
      <section className="relative my-16 h-52 container mx-auto px-2">
        <div className="py-3">
          <h1 className="font-bold text-2xl">Edit Event</h1>
          <EventForm onFormSubmit={this.onSubmit} initialValues={event} />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  return {
    event: state.events.find((event) => event.id === parseInt(eventId)),
  };
};

export default connect(mapStateToProps, { fetchEvent, editEvent })(EditEvent);
