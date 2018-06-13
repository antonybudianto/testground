const initialState = {
  currentTime: 0,
  data: null,
};

const SET_ANIM = 'ANIM/SET_ANIM';
const SET_TIME = 'ANIM/SET_TIME';

export function setTime(time) {
  return {
    type: SET_TIME,
    payload: time,
  };
}

export function setAnimation(id, data) {
  return {
    type: SET_ANIM,
    payload: { id, data },
  };
}

export function animationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TIME:
      return {
        ...state,
        currentTime: action.payload,
      };
    case SET_ANIM:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload.data,
        },
      };
    default:
      return state;
  }
}
