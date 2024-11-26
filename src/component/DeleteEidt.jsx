import dele from "../img/delete.svg";
import eidt from "../img/edit.svg";
function DeleteEidt({ handleAlert,handleEidtInputComt }) {
  return (
    <>
      <span className="flex flex-row">
        <button
          onClick={handleAlert} 
          className="w-14 h-10 flex lg:justify-center lg:items-center text-red-700 font-bold text-lg mr-4"
        >
          <img className="p-1 text-red-700" src={dele} alt="reply" />
          <p>Delete</p>
        </button>
        <button onClick={handleEidtInputComt} className="w-14 h-10 flex lg:justify-center lg:items-center text-indigo-700 font-bold text-lg mr-4">
          <img className="p-1" src={eidt} alt="reply" />
          Edit
        </button>
      </span>
    </>
  );
}

export default DeleteEidt;
