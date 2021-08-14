import React from "react";
import { Field } from "redux-form";

import InputField from "./InputField";
import Button from "../../../components/Button";

const EventScheduleFields = ({ fields, meta: { error, submitFailed } }) => (
  <div className="relative w-auto flex-1">
    {fields.map((schedule, index) => (
      <div
        className="p-3 mb-3 w-full border-solid border-2 border-gray-300 rounded"
        key={index}
      >
        <h2 className="my-1 font-medium text-lg">
          Event Schedule Day #{index + 1}
        </h2>

        <Button
          variant="primary"
          size="sm"
          onClick={(e) => {
            e.preventDefault();
            fields.remove(index);
          }}
        >
          Remove
        </Button>

        <Field
          name={`${schedule}.title`}
          component={InputField}
          label="Event Title"
        />
        <Field
          name={`${schedule}.date`}
          component={InputField}
          label="Date (eg. Monday, 8 August 2021)"
        />
        <Field
          name={`${schedule}.startsAt`}
          component={InputField}
          label="Event Start (eg. 08:00 AM"
        />
        <Field
          name={`${schedule}.endsAt`}
          component={InputField}
          label="Event Ends (eg. 13:00 PM"
        />
      </div>
    ))}

    <div className="">
      <Button
        variant="primary"
        size="md"
        block
        onClick={(e) => {
          e.preventDefault();
          fields.push({});
        }}
      >
        Add {fields.length > 0 ? "more" : ""} schedule
      </Button>

      {submitFailed && error && (
        <span className="mt-2 text-red-900 text-sm font-bold">{error}</span>
      )}
    </div>
  </div>
);

export default EventScheduleFields;
