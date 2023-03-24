import "./index.css";
import Budget from "./components/Budget";
import AddBudget from "./components/AddBudget";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [budgets, setBudgets] = useState([
    {
      id: 1,
      name: "Personal",
      purpose: "Used for personal budgeting",
      img: "https://cdn-icons-png.flaticon.com/512/1511/1511168.png",
    },
    {
      id: 2,
      name: "Company",
      purpose: "All expenses for company",
      img: "https://cdn-icons-png.flaticon.com/512/1511/1511164.png",
    },
    {
      id: 3,
      name: "Investments",
      purpose: "Stock and real estate investments",
      img: "https://cdn-icons-png.flaticon.com/512/1043/1043465.png",
    },
  ]);

  function updateBudget(id, newName, newPurpose) {
    const updatedBudget = budgets.map((budget) => {
      if (id == budget.id) {
        return { ...budget, name: newName, purpose: newPurpose };
      }

      return budget;
    });
    setBudgets(updatedBudget);
  }

  function newBudget(name, purpose, img) {
    const newBudget = {
      id: uuidv4(),
      name: name,
      purpose: purpose,
      img: img,
    };
    setBudgets([...budgets, newBudget]);
  }

  return (
    <div className="App">
      <>
        <div className="flex flex-wrap justify-center">
          {budgets.map((budgets) => {
            return (
              <Budget
                key={budgets.id}
                id={budgets.id}
                name={budgets.name}
                purpose={budgets.purpose}
                img={budgets.img}
                updateBudget={updateBudget}
              />
            );
          })}
        </div>
        <div className="py-2.5">
          <AddBudget newBudget={newBudget} />
        </div>
      </>
    </div>
  );
}

export default App;
