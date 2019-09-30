import React from "react";
// import TabsProto from "./Components/Tabs/TabsProto";
import { Toggle, Portal } from "./Components/utils";
import Modal from "./Elements/Modal/Modal";

function App() {
  return (
    <div className="App">
      <Toggle>
        {({ on, toggle }) => (
          <>
            <button onClick={toggle}>Login</button>
            <Modal on={on} toggle={toggle}>
              <h1>Still in Modal</h1>
            </Modal>
          </>
        )}
      </Toggle>
    </div>
  );
}

export default App;
