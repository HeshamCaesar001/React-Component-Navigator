import React, { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
import { produce } from "immer";
const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "value-to-add";
const ADD_VALUE = "add-value";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      break;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      break;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      break;
    case ADD_VALUE:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      break;

    default:
      return;
  }
};
function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_VALUE,
    });
    // setCount(count+valueToAdd);
    // setValueToAdd(0);
  };
  return (
    <Panel>
      <h1 className="text-lg">
        Count is <span className="text-red-400">{state.count}</span>
      </h1>

      <div className="flex flex-row justify-evenly">
        <Button onClick={increment} primary>
          Increment
        </Button>
        <Button onClick={decrement} primary>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Add a lot!</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          min={0}
          value={state.valueToAdd || ""}
          onChange={handleChange}
        />
        <Button rounded warning>
          Add
        </Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
