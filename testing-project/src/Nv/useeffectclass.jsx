// function fetchUser () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({id : 1, name: "John Doe"});
//         }, 2000);
//     });
// }

// function ApiSimulation (){
//     const [User, setUser] = React.useState("loading");
//     const [id, setId] = React.useState("loading");
//     React.useEffect(() => {
//         fetchUser().then((User) {
//             fetchUser().then((User) => {
//                 setUser(User.name);
//                 setId(User.id);
//                 setId(User.id);
//             });
//         });

//         return (
//             const [user, setUser] = React.useState;
//             const [id, setId] = React.useState("John Doe");
//             React.useEffect(() => {
//                 fetchUser().then((user) => {

//                     setUser(user.name);
//                     setId(user.id);
//                 });
// });



// export default ApiSimulation;





// import React from "react";

// function fetchUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "John Doe" });
//     }, 2000);
//   });
// }

// function ApiSimulation() {
//   const [user, setUser] = React.useState("loading");
//   const [id, setId] = React.useState("loading");

//   React.useEffect(() => {
//     fetchUser().then((userData) => {
//       setUser(userData.name);
//       setId(userData.id);
//     });
//   }, []); // Empty dependency array ensures this effect runs only once after the component mounts.

//   return (
//     <div>
//       User: {user}, <br />
//       ID: {id}
//     </div>
//   );
// }

// export default ApiSimulation;




// create a component which will return unordered lists passed
//  by fetchdata () resolve promise with list / array of strings



import React, { useState, useEffect } from "react";

// Simulate a fetch function that returns a promise resolving to an array of strings
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["React", "JavaScript", "HTML", "CSS", "Node.js"]);
    }, 1000); // Simulate network delay
  });
}

// List Component
function ListComponent() {
  const [items, setItems] = useState([]); // State to store the list of items
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    // Fetch data and update the state
    fetchData().then((data) => {
      setItems(data);
      setLoading(false); // Set loading to false after data is fetched
    });
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <div>
      {loading ? ( // Show a loading message while the data is being fetched
        <p>Loading...</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li> // Render each string as a list item
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListComponent;
