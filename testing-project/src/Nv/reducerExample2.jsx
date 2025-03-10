// import { useReducer } from "react";

// const initialState = {
//   options: [
//     { id: 1, label: "Option 1", value: 10 },
//     { id: 2, label: "Option 2", value: 20 },
//     { id: 3, label: "Option 3", value: 30 },
//   ],
//   quantity: 1,
//   selected: 1,
// };

// function ReduceButtonState(state) {
//   return {
//     ...state,
//     decrementDisabled: state.quantity === 0,
//     incrementDisabled: state.quantity === 10,
//   };
// }

// function reduceTotal(state) {
//   const option = state.options.find((y) => option.id === state.selected);
//   return { ...state, total: state.quantity * option.value };
// }

// function Reducer(state, action) {
//   let newState;
//   switch (action.type) {
//     case "init":
//       newState = ReduceTotal(state);
//       return ReduceButtonState(newState);
//     case "decrement":
//       newState = { ...state, quantity: state.quantity - 1 };
//       newState = ReduceTotal(newState);
//       return ReduceButtonState(newState);

//     case "incremenr":
//       newState = { ...state, quantity: state.quantity + 1 };
//       newState = ReduceTotal(newState);
//       return ReduceButtonState(newState);

//     case "selectItem":
//       newState = { ...state, selected: Number(action.id) };
//       return ReduceTotal(newState);

//     default:
//       throw new Error("Unknown action type");
//   }
// }

// export default function MultipleState() {
//   const [
//     {
//       options,
//       selected,
//       quantity,
//       total,
//       decrementDisabled,
//       incrementDisabled,
//     },
//     dispatch,
//   ] = useReducer(Reducer1, initialState);
// }






// using co-pilot

// import { useReducer } from "react";

// const initialState = {
//   options: [
//     { id: 1, label: "Option 1", value: 10 },
//     { id: 2, label: "Option 2", value: 20 },
//     { id: 3, label: "Option 3", value: 30 },
//   ],
//   quantity: 1,
//   selected: 1,
// };

// function ReduceButtonState(state) {
//   return {
//     ...state,
//     decrementDisabled: state.quantity === 0,
//     incrementDisabled: state.quantity === 10,
//   };
// }

// function reduceTotal(state) {
//   const option = state.options.find((y) => y.id === state.selected);
//   return { ...state, total: state.quantity * option.value };
// }

// function Reducer(state, action) {
//   let newState;
//   switch (action.type) {
//     case "init":
//       newState = reduceTotal(state);
//       return ReduceButtonState(newState);
//     case "decrement":
//       newState = { ...state, quantity: state.quantity - 1 };
//       newState = reduceTotal(newState);
//       return ReduceButtonState(newState);

//     case "increment":
//       newState = { ...state, quantity: state.quantity + 1 };
//       newState = reduceTotal(newState);
//       return ReduceButtonState(newState);

//     case "selectItem":
//       newState = { ...state, selected: Number(action.id) };
//       return reduceTotal(newState);

//     default:
//       throw new Error("Unknown action type");
//   }
// }

// export default function MultipleState() {
//   const [
//     {
//       options,
//       selected,
//       quantity,
//       total,
//       decrementDisabled,
//       incrementDisabled,
//     },
//     dispatch,
//   ] = useReducer(Reducer, initialState);
// }



// using chatgpt

import { useReducer, useEffect } from "react";

const initialState = {
  options: [
    { id: 1, label: "Option 1", value: 10 },
    { id: 2, label: "Option 2", value: 20 },
    { id: 3, label: "Option 3", value: 30 },
  ],
  quantity: 1,
  selected: 1,
  total: 10, // Initial total based on selected option (Option 1) * quantity
  decrementDisabled: false,
  incrementDisabled: false,
};

function ReduceButtonState(state) {
  return {
    ...state,
    decrementDisabled: state.quantity === 0,
    incrementDisabled: state.quantity === 10,
  };
}

function reduceTotal(state) {
  const option = state.options.find((y) => y.id === state.selected);
  return { ...state, total: state.quantity * option.value };
}

function Reducer(state, action) {
  let newState;
  switch (action.type) {
    case "init":
      newState = reduceTotal(state);
      return ReduceButtonState(newState);

    case "decrement":
      if (state.quantity > 0) {
        newState = { ...state, quantity: state.quantity - 1 };
        newState = reduceTotal(newState);
        return ReduceButtonState(newState);
      }
      return state; // Prevent unnecessary updates

    case "increment":
      if (state.quantity < 10) {
        newState = { ...state, quantity: state.quantity + 1 };
        newState = reduceTotal(newState);
        return ReduceButtonState(newState);
      }
      return state;

    case "selectItem":
      newState = { ...state, selected: Number(action.id) };
      newState = reduceTotal(newState);
      return ReduceButtonState(newState);

    default:
      throw new Error("Unknown action type");
  }
}

export default function MultipleState() {
  const [
    {
      options,
      selected,
      quantity,
      total,
      decrementDisabled,
      incrementDisabled,
    },
    dispatch,
  ] = useReducer(Reducer, initialState);

  // Ensure state initializes correctly on mount
  useEffect(() => {
    dispatch({ type: "init" });
  }, []);

  return (
    <div>
      <h3>Select an Option:</h3>
      <select
        value={selected}
        onChange={(e) => dispatch({ type: "selectItem", id: e.target.value })}
      >
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>

      <h3>Quantity:</h3>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        disabled={decrementDisabled}
      >
        -
      </button>
      <span> {quantity} </span>
      <button
        onClick={() => dispatch({ type: "increment" })}
        disabled={incrementDisabled}
      >
        +
      </button>

      <h3>Total: {total}</h3>
    </div>
  );
}


