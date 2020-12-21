import React from "react";
import ReactDOM from "react-dom";
import MenuContainer from "./common/MenuContainer";
import { Provider } from "mobx-react";
import stores from "./stores";


const RenderComponent = () => (
    <Provider {...stores}>
      <MenuContainer/>
    </Provider>
  );
  
  ReactDOM.render(<RenderComponent />, document.querySelector("#container"));

