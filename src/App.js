import { useEffect, useReducer } from "react";
import reducer, { initialState } from "./state/reducer";
import Contex from "./contex";
import PublishMessage from "./components/PublishMessage";
import MessageBoard from "./components/MessageBoard";
import SetUsername from "./components/SetUsername";
import "./pubsub";
import PubSub from "./pubsub";

const pubsub = new PubSub();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    pubsub.addListener({
      message: (messageObject) => {
        const { channel, message } = messageObject;

        console.log("Received message", message, "channle", channel);
        dispatch(message);
      },
    });
  }, []);

  console.log(state);

  return (
    <Contex.Provider value={{ state, dispatch, pubsub }}>
      <h2>Reaction</h2>
      <SetUsername />
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Contex.Provider>
  );
}

export default App;
