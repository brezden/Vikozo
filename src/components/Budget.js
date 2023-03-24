import EditBudget from "./EditBudget";

function Budget(props) {
  return (
    <div className="min-w-[400px] max-w-[400px] m-2 py-8 px-8 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="object-cover rounded-full h-{100px} w-{100px} block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={props.img}
        alt="Budget"
        draggable="false"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">
            {props.name}
          </p>
          <p className="text-slate-500 font-medium">
            {props.purpose}
          </p>
        </div>
        <div className="space-x-1">
          <button className="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
            Open
          </button>
          <EditBudget
            id={props.id}
            name={props.name}
            purpose={props.purpose}
            updateBudget={props.updateBudget}
          />
        </div>
      </div>
    </div>
  );
}

export default Budget;
