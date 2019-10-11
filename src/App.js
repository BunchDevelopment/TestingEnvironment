import React from "react";
import { Toggle } from "./Components/utils";
import Modal from "./Components/Modal/Modal";
import Input from "./Components/Input/TestingForInput";
import SoftwareCatalog from './Components/SoftwareCatalog/SoftwareCatalog'


function App() {
  return (
    <div className="App">
      {/* <Toggle>
        {({ on, toggle }) => (
          <>
            <button onClick={toggle}>Login</button>
            <Modal on={on} toggle={toggle}>
              <h1>Still in Modal</h1>
            </Modal>
            <Input />
          </>
        )}
      </Toggle> */}
      <SoftwareCatalog />
    </div>
  );
}

export default App;