export interface AuthState {
  auth: boolean;
}

const initialState = {
  auth: false,
};

type Action = { type: string; payload: any };
export const authReducer = (
  state: AuthState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "LOGIN": {
      return { ...state, auth: true };
    }
    case "LOGOUT": {
        return {
            ...state, auth: false
        }
    }
    default:
      return state;
  }
};
