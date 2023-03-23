import "./index.css";
import User from "./components/User";
import { useState } from "react";

function App() {
  const showUser = true;
  const [role, setRole] = useState();

  return (
    <div className="App bg-gray-800">
      {showUser ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <User name="Callum" role="Tester" />
          <User name="Bob" role={role} />
        </>
      ) : (
        <p>Hello</p>
      )}
    </div>
  );
}

export default App;
