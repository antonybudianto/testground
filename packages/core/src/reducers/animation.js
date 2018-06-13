const initialState = {};

const SET_ANIM = 'ANIM/SET_ANIM';

export function setAnimation(id, data) {
  return {
    type: SET_ANIM,
    payload: { id, data },
  };
}

export function animationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ANIM:
      return {
        ...state,
        [action.payload.id]: action.payload.data,
      };
    default:
      return state;
  }
}
