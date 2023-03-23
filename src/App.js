import "./index.css";
import Budget from "./components/Budget";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Personal",
      purpose: "Used for personal budgeting",
      img: "https://cdn-icons-png.flaticon.com/512/1511/1511168.png",
    },
    {
      name: "Company",
      purpose: "All expenses for company",
      img: "https://cdn-icons-png.flaticon.com/512/1511/1511164.png",
    },
    {
      name: "Investments",
      purpose: "Stock and real estate investments",
      img: "https://cdn-icons-png.flaticon.com/512/1043/1043465.png",
    },
  ]);

  return (
    <div className="App">
      <>
        <div className="flex flex-wrap justify-center">
          {users.map((user) => {
            return (
              <Budget
                key={uuidv4()}
                name={user.name}
                purpose={user.purpose}
                img={user.img}
              />
            );
          })}
        </div>
      </>
    </div>
  );
}

export default App;
