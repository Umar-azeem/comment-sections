import { useSave } from "./zustand";
function AlartDelete({ handleAlert, id }) {
  const { SaveDataDelete } = useSave();
  return (
    <>
      
      <div className="w-full flex justify-center items-center">
    <div
          onClick={() => {
            handleAlert(id);
            SaveDataDelete(id);
          }}
          className="flex border flex-col rounded-lg p-2 md:p-4 lg:p-6 w-2/4 md:w-2/3 lg:w-1/3 text-center bg-white shadow-md"
        >
          <h1 className="text-gray-600  md:py-2 text-start text-md md:text-lg font-semibold md:font-bold ">
            Delete Comment
          </h1>
          <p className="text-gray-600 md:py-2 text-xs md:text-base md:font-medium text-center">
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <div className="flex  flex-row md:justify-between gap-4 md:mt-4">
            <button
              onClick={handleAlert}
              className="w-full  md:w-auto p-1 md:p-3 bg-gray-400 text-white rounded-lg md:font-medium text-xs md:text-sm hover:bg-gray-700 focus:ring-4 focus:ring-gray-300"
            >
              NO, CANCEL
            </button>
            <button className="w-full md:w-auto md:p-3 bg-red-400 text-white rounded-lg md:font-medium text-xs md:text-sm hover:bg-red-700 focus:ring-4 focus:ring-red-300">
              YES, DELETE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlartDelete;
