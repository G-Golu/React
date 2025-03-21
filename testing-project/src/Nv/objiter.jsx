import React from "react";

class IterableExample extends React.Component {
  state = {
    first: "loading ...",
    second: "loading ...",
    third: "loading ...",
    fourth: "loading ...",
    fifth: "loading ...",
    donemsg: "loading complete",
  };

  constructor() {
    super();
    setTimeout(() => {
      this.setState({ first: "done" });
    }, 500);

    setTimeout(() => {
      this.setState({ second: "done" });
      setTimeout(() => {
        this.setState({ third: "done" });
      }, 600);

      setTimeout(() => {
        this.setState({ fourth: "done" });
      }, 700);

      setTimeout(() => {
        this.setState({ fifth: this.state.donemsg });
      }, 800);
    }, 900);
  }

  render() {
    return (
      <ul>
        {Object.keys(this.state)
          .filter((key) => key !== "donemsg")
          .map((key) => (
            <li key={key}>
              <strong>{key}:</strong> {this.state[key]}
            </li>
          ))}
      </ul>
    );
  }
}

export default IterableExample; // this lin name import into main.jsx , for run like : import IterableExample and write in <div> Iterable </div>
// if write <div>' '  </div> in div , multiple file can run with one time , if write without div so can run only one file run.
