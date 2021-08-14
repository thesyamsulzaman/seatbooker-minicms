export const validate = (formValues) => {
  let errors = {};

  if (!formValues.name) {
    errors.name = "You must enter event name";
  }

  if (!formValues.address) {
    errors.address = "You must enter a valid address";
  }

  if (!formValues.seats) {
    errors.seats = "Seats can't be empty";
  } else if (parseInt(formValues.seats) === 0) {
    errors.seats = "Seats can't be 0";
  } else if (parseInt(formValues.seats) > 20) {
    errors.seats = "Seats can't be over 20";
  }

  if (!formValues.speakers || !formValues.speakers.length) {
    errors.speakers = { _error: "At least one speaker should be entered" };
  } else {
    let speakerArrayErrors = [];

    formValues.speakers.forEach((speaker, speakerIndex) => {
      let speakerErrors = {};

      if (!speaker || !speaker.name) {
        speakerErrors.name = "Name field is required";
        speakerArrayErrors[speakerIndex] = speakerErrors;
      }

      if (!speaker || !speaker.company) {
        speakerErrors.company = "This field is required";
        speakerArrayErrors[speakerIndex] = speakerErrors;
      }

      if (!speaker || !speaker.website) {
        speakerErrors.website = "Website field is required";
        speakerArrayErrors[speakerIndex] = speakerErrors;
      }
    });

    if (speakerArrayErrors.length) {
      errors.speakers = speakerArrayErrors;
    }
  }

  if (!formValues.schedules || !formValues.schedules.length) {
    errors.schedules = { _error: "At least one schedule should be set" };
  } else {
    let scheduleArrayErrors = [];

    formValues.schedules.forEach((schedule, scheduleIndex) => {
      let scheduleErrors = {};

      if (!schedule || !schedule.title) {
        scheduleErrors.title = "Name field is required";
        scheduleArrayErrors[scheduleIndex] = scheduleErrors;
      }

      if (!schedule || !schedule.date) {
        scheduleErrors.date = "This field is required";
        scheduleArrayErrors[scheduleIndex] = scheduleErrors;
      }

      if (!schedule || !schedule.startsAt) {
        scheduleErrors.startsAt = "Website field is required";
        scheduleArrayErrors[scheduleIndex] = scheduleErrors;
      }

      if (!schedule || !schedule.endsAt) {
        scheduleErrors.endsAt = "Website field is required";
        scheduleArrayErrors[scheduleIndex] = scheduleErrors;
      }
    });

    if (scheduleArrayErrors.length) {
      errors.schedules = scheduleArrayErrors;
    }
  }

  return errors;
};
