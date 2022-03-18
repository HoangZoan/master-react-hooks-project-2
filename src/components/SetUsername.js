import useAppContext from "./hooks";
import { setUsername } from "../state/actions";

function SetUsername() {
  const {
    dispatch,
    state: { username },
  } = useAppContext();

  const updateUsername = (event) => {
    dispatch(setUsername(event.target.value));
  };

  return (
    <div>
      <h3>Username</h3>
      <input onChange={updateUsername} value={username} />
    </div>
  );
}

export default SetUsername;
