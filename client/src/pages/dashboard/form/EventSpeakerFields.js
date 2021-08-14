import React from "react";
import { Field } from "redux-form";

import InputField from "./InputField";
import Button from "../../../components/Button";

const EventSpeakerFields = ({ fields, meta: { error, submitFailed } }) => (
  <div className="flex-1 relative w-auto ml-3">
    {fields.map((speaker, index) => (
      <div
        key={index}
        className="p-3 mb-3 border-solid border-2 border-gray-300 rounded "
      >
        <h2 className="my-1 font-medium text-lg">Event Speaker #{index + 1}</h2>

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
          name={`${speaker}.name`}
          component={InputField}
          label="Speaker Name (eg. Andrew Ng)"
        />

        <Field
          name={`${speaker}.company`}
          component={InputField}
          label="Speaker's Company Name (eg. Google)"
        />

        <Field
          name={`${speaker}.website`}
          component={InputField}
          label="Speaker's Website"
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
        Add {fields.length > 0 ? "more" : ""} Speaker
      </Button>

      {submitFailed && error && (
        <span className="mt-2 text-red-900 text-sm font-bold">{error}</span>
      )}
    </div>
  </div>
);

export default EventSpeakerFields;
