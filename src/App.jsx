import React from "react";

function App() {
  let currDate = new Date(2020, 5, 5, 15);
  currDate = currDate.getHours();
  let greeting = "";
  const design = {};
  if (currDate >= 1 && currDate <= 11) {
    greeting = "Good Morning";
    design.color = "green";
  } else if (currDate >= 12 && currDate <= 19) {
    greeting = "Good afternoon";
    design.color = "orange";
  } else {
    greeting = "Good Night";
    design.color = "pink";
  }

  return (
    <>
      <div>
        <h1>
          Hello sir, <span style={design}>{greeting}</span>
        </h1>
      </div>
    </>
  );
}

export default App;
