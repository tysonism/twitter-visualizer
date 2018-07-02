import React from "react";
import "./App.css";

const handleClick = (e) => {
event.target.classList.add('rocket')
}
const App = () => (
  <div className="container">
    <div>
      <h1 className="title-text">Ready for launch:</h1>
    </div>
    <div className="rocket-text">
      <div >🚀</div>
    </div>
  </div>
);
export default App;
