import { useInputData, useSave } from "./zustand";
function Eidtcomt({ id, handleEidtInputComt }) {
  const { eidtinputData, setEidtInputData } = useInputData();
  const { setEidtInputupdate, setcommentOpen } = useSave();
  const handleEidtInput = (e) => {
    setEidtInputData(e.target.value);
  };
  return (
    <>
      <div className="flex justify-center md-4 md:m-8">
        <div className="bg-white border flex flex-col md:flex-row  rounded-lg p-3 md:p-8 w-3/4">
          <div className="w-full flex flex-col-reverse lg:flex-row">
            <input
              onChange={handleEidtInput}
              type="text"
              placeholder="Add comment..."
              className="border border-gray-300 w-full rounded-lg md:pb-20 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            onClick={(e) => {
              handleEidtInputComt();
              setEidtInputupdate(id, eidtinputData);
              setcommentOpen(id);
            }}
            className="ml-4 w-14 h-8 items-start md:w-20 md:h-10 relative right-5 lg:right-0 md:right-20 lg:top-0 top-2 md:top-16 bg-indigo-600 text-white rounded-lg font-medium text-xs md:text-sm hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
          >
            Updated
          </button>
        </div>
      </div>
    </>
  );
}

export default Eidtcomt;
