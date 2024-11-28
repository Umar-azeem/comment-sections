import minus from "../img/minus.svg";
import plus from "../img/plus.svg";
import { useSave } from "./zustand";

function PlusMinusButton({ item }) {
  const { setIncrease, setDecrease } = useSave();  


  return (
    <>
      <div
        onClick={() => setIncrease(item.id)}
        className="bg-blue-50 w-full lg:w-12 flex flex-row justify-center items-center lg:border-0 rounded-2xl border-2"
      >
        <button
          onClick={() => setDecrease(item.id)}
          className="flex justify-center rounded-2xl items-center w-5 h-2 sm:w-10 sm:h-10 hover:bg-indigo-300"
        >
          <img src={minus} alt="Decrease" />
        </button>
        <p className="text-indigo-700 text-center text-sm sm:text-xl sm:p-2">{item.likes}</p>
        <button
          onClick={() => setIncrease(item.id)}
          className="flex justify-center rounded-2xl items-center w-5 h-2 sm:w-10 sm:h-10 hover:bg-indigo-300"
        >
          <img src={plus} alt="Increase" />
        </button>
      </div>
    </>
  );
}
export default PlusMinusButton;
