import React from "react";
import ReactDOM from "react-dom";
import router from "./routes.js";

import { RouterProvider } from "react-router-dom";
import App from './App.js'

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* first time this app is get rendered and all other component are inside Routes*/}
//         <App />
//       </div>
//     );
//   }
// }

ReactDOM.render(
    <App />,
  document.querySelector("#root")
);
