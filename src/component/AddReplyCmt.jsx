import jul from "../img/juliusomo.png";
import { useInputData, useSave } from "./zustand";
import { useState } from "react";
function AddReplyCmt({ id }) {
  const { SaveData, AddReply, } = useSave();
  const {replyInputData,setReplyInputData}=useInputData();
  const [savereplyInputData,setSaveReplyInputData]=useState();
  const handleInputValue = (e) => {
    setReplyInputData(e.target.value);
  };
        

  return (
    <>
      {JSON.stringify( replyInputData)}
      <div className="flex justify-center items-center m-8">
        <div className="bg-white border flex flex-row items-center rounded-lg p-3 md:p-8 w-3/4">
          <div className="w-full flex flex-col-reverse lg:flex-row">
            <img
              src={jul}
              className="w-16 h-16 lg:mt-0 mt-8 rounded-full mr-4"
              alt="Profile"
            />
            <input
              //value={SaveData}
              onChange={handleInputValue}
              type="text"
              placeholder="Add comment..."
              className="border border-gray-300 w-full  rounded-lg md:pb-20 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            onClick={() => {
                setReplyInputData();
              AddReply();
            }}
            className="ml-4 w-20 h-10  relative right-5 lg:right-0 md:right-20 lg:top-0 top-7 md:top-16 bg-indigo-600 text-white rounded-lg font-medium text-sm hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default AddReplyCmt;
