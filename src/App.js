import { useEffect } from "react";
import "./App.css";
import Usercard from "./userCard/Usercard";
import { SetUsers } from "./redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { currentUsers } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    SetUsers(dispatch);
  }, [dispatch]);

  return (
    <div className="app">
      <div className="cards">
        {currentUsers?.map((user, index) => (
          <Usercard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
