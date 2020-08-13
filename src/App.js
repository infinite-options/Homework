import React from "react";
import LeftPanel from "./components/leftPanel";
import CenterPanel from "./components/centerPanel";
import RightPanel from "./components/rightPanel";

function App() {
  return (
    <div className='homeScreen'>
      <LeftPanel />
      <CenterPanel />
      <RightPanel />
    </div>
  );
}

export default App;
