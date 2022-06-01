const GET_ALL_GREETINGS = 'GET_ALL_GREETINGS';
const GET_RANDOM_GREETING = 'GET_RANDOM_GREETING';

const initialState = {
  greetings: [],
  randomGreeting: [],
};

const getGreetings = () => async (dispatch) => {
  const greetings = await fetch('http://localhost:3000/api/v1/greetings')
    .then((resp) => resp.json())
    .then((json) => json)
    .catch((error) => error);

  dispatch({
    type: GET_ALL_GREETINGS,
    payload: greetings,
  });
};

const getRandomGreeting = () => async (dispatch) => {
  const randomGreeting = await fetch('http://localhost:3000/api/v1/greetings/random')
    .then((resp) => resp.json())
    .then((json) => json)
    .catch((error) => error);
  dispatch({
    type: GET_RANDOM_GREETING,
    payload: randomGreeting,
  });
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GREETINGS:
      return {
        ...state,
        greetings: action.payload,
      };
    case GET_RANDOM_GREETING:
      return {
        ...state,
        randomGreeting: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
export { getGreetings, getRandomGreeting };
