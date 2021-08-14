export const mapEventObject = ({
  userId,
  name,
  address,
  seats,
  speakers,
  schedules,
  bookedSeats = [],
}) => {
  return {
    userId,
    name,
    address,
    seats,
    bookedSeats,
    speakers,
    schedules,
  };
};
