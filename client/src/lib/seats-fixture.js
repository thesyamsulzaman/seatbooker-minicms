export const seatFixtures = [
  {
    id: 1,
    seatCode: "SEAT-001",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 2,
    seatCode: "SEAT-002",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 3,
    seatCode: "SEAT-003",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 4,
    seatCode: "SEAT-004",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 5,
    seatCode: "SEAT-005",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 6,
    seatCode: "SEAT-006",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 7,
    seatCode: "SEAT-007",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 8,
    seatCode: "SEAT-008",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 9,
    seatCode: "SEAT-009",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 10,
    seatCode: "SEAT-010",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 11,
    seatCode: "SEAT-011",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 12,
    seatCode: "SEAT-012",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 13,
    seatCode: "SEAT-013",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 14,
    seatCode: "SEAT-014",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 15,
    seatCode: "SEAT-015",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 16,
    seatCode: "SEAT-016",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 17,
    seatCode: "SEAT-017",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 18,
    seatCode: "SEAT-018",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 19,
    seatCode: "SEAT-019",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
  {
    id: 20,
    seatCode: "SEAT-020",
    fullName: "",
    email: "",
    isBooked: false,
    isAvailable: true,
  },
];

const reducerFunc = (finalArray, currentValue) => {
  if (!finalArray.find((item) => item.seatCode === currentValue.seatCode)) {
    finalArray.push(currentValue);
  }
  return finalArray;
};

const sortFunc = (a, b) => a.id - b.id;

export const mergeWithFixture = ({ mergableArray, maximumMerge, fixture }) => {
  return [...mergableArray, ...fixture]
    .sort(sortFunc)
    .reduce(reducerFunc, [])
    .map((item) =>
      item.id > maximumMerge ? { ...item, isAvailable: false } : item
    );
};
