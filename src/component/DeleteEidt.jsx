import dele from "../img/delete.svg";
import eidt from "../img/edit.svg";
function DeleteEidt({ id, handleAlert, handleEidtInputComt, setcommentOpen }) {
  // const  { commentOpen, setcommentOpen } = useSave();
  return (
    <>
    
      <span className="flex flex-row">
        <button
          onClick={() => handleAlert(id)}
          className="w-5 h-2 md:w-14 md:h-10 flex lg:justify-center lg:items-center text-red-700 font-bold text-lg mr-4"
        >
          <img className="p-1 text-xs md:text-lg text-red-700" src={dele} alt="reply" />
          <p className="text-sm md:text-lg">Delete</p>
        </button>
        <button
          onClick={() => {
            handleEidtInputComt(id);
            setcommentOpen(id);
          }}
          className="w-5 h-2 md:w-14 md:pt-0 md:ml-0 ml-6 md:h-10 flex lg:justify-center lg:items-center text-indigo-700 font-bold text-lg mr-4"
        >
          <img className="p-1 text-sm md:text-lg" src={eidt} alt="reply" />
          <p className="text-sm md:text-lg">Eidt</p>
        </button>
      </span>
    </>
  );
}

export default DeleteEidt;
