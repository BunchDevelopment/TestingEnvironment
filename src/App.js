import React from "react";
import * as Button from "./Components/Button/Button";
import TestingButton from "./Components/Button/ReactButtonTesting";
import Tabs from "./Components/Tabs/Tabs";
// import TabsProto from "./Components/Tabs/TabsProto";
import Toggle from "./Components/Toggle/ToggleRenderProps";

function App() {
  return (
    <div className="App">
      {/* TODO meed to fix */}
      {/* <TabsProto label={["one", "two", "three"]} /> */}
      <Toggle>
        {({ on, toggle }) => (
          <div>
            {on && <h1 on={on}>Test</h1>}
            <button onClick={toggle}>Show/Hide</button>
          </div>
        )}
      </Toggle>
    </div>
  );
}

export default App;
