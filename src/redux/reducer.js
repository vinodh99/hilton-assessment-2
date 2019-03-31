const SAVED = "SAVED";

export function save(rooms) {
  return {
    type: SAVED,
    payload: rooms
  };
}

const initialState = {
  rooms: [
    {
      name: "Room 1",
      adults: 1,
      children: 0,
      checked: true
    },
    {
      name: "Room 2",
      adults: 1,
      children: 0,
      checked: false
    },
    {
      name: "Room 3",
      adults: 1,
      children: 0,
      checked: false
    },
    {
      name: "Room 4",
      adults: 1,
      children: 0,
      checked: false
    }
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVED:
      return {
        ...state,
        rooms: action.payload
      };
    default:
      return state;
  }
}
