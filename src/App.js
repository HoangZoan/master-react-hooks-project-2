import { useReducer } from "react";
import reducer, { initialState } from "./state/reducer";
import Contex from "./contex";
import PublishMessage from "./components/PublishMessage";
import MessageBoard from "./components/MessageBoard";
import "./pubsub";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("state", state);

  return (
    <Contex.Provider value={{ state, dispatch }}>
      <h2>Reaction</h2>
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Contex.Provider>
  );
}

export default App;
