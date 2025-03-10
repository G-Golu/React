import { useReducer } from "react";

function Fun1(state, action) {
  console.log(action);
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.value };
    case "changeAge":
      return { ...state, age: action.value };
    default:
      throw new Error("Unknown action type");
  }
}
function Reducer1() {
  const [{ name, age }, dispatch] = useReducer(Fun1, { name: " ", age: " " });
  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) =>
          dispatch({ type: "changeName", value: e.target.value })
        }
      />

      <p> {name} </p>

      <input
        placeholder="Age"
        value={age}
        onChange={(e) => dispatch({ type: "changeAge", value: e.target.value })}
      />
      {age}
    </div>
  );
}

export default Reducer1;
