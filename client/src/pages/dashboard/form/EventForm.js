import React, { Component } from "react";
import { FieldArray, reduxForm } from "redux-form";

import EventInfoFields from "./EventInfoFields";
import EventScheduleFields from "./EventScheduleFields";
import EventSpeakerFields from "./EventSpeakerFields";

import { validate } from "./validator";

import Button from "../../../components/Button";

class EventForm extends Component {
  onSubmit = (formValues) => {
    this.props.onFormSubmit(formValues);
  };

  render() {
    return (
      <form action="" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <EventInfoFields />

        <div className="flex items-start">
          <FieldArray name="schedules" component={EventScheduleFields} />
          <FieldArray name="speakers" component={EventSpeakerFields} />
        </div>

        <div className="my-4">
          <Button type="submit" variant="dark" size="md" block>
            Save
          </Button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: "eventCreate", validate })(EventForm);
