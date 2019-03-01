export const SET_LOGIN = "set:user";
export const SET_CONTEXT = "set:context";

const userInitialState = {
  token: "",
  context_uri: ""
};

export default function userReducer(
  state = userInitialState,
  { type, payload }
) {
  switch (type) {
    case SET_CONTEXT:
      return { ...state, context_uri: payload };
    case SET_LOGIN:
      return { ...state, token: payload };
    default:
      return state;
  }
}
