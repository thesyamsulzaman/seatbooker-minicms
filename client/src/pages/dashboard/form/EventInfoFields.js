import React from "react";
import { Field } from "redux-form";

import InputField from "./InputField";

const EventInfoFields = () => (
  <div className="flex-1 my-3 p-3 border-solid border-2 border-gray-300 rounded">
    <h2 className="my-1 font-medium text-lg">Event info</h2>

    <Field name="name" component={InputField} label="Enter Event name" />

    <Field
      name="address"
      component={InputField}
      label="Enter Address (eg. Cianjur, Bikini Bottom)*"
    />

    <Field
      name="seats"
      component={InputField}
      label="Amount of seats (eg. 20)"
      type="number"
    />
  </div>
);

export default EventInfoFields;
