import jul from "../img/juliusomo.png";
import { useInputData } from "./zustand";
import { useSave } from "./zustand";
import { useStore } from "./zustand.js";
import { useState } from "react";
function Comment ({id}) {
  const { inputData,setInputData } = useInputData();
  const { SaveData,setSaveData } = useSave();
  const { hanldeReply } = useStore();
  const [singleReply, setSingleReply] = useState();


  const handleInputValue = (e) => {
    const input = e.target.value;
    setInputData(input); 
    
  };
 
console.log("SaveData",SaveData)
  return (
    <>
    {JSON.stringify(SaveData.massege)}
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
        onChange={(e) => setSingleReply(e.target.value)}
          type="text"
          placeholder="Add comment..."
          className="border border-gray-300 w-full  rounded-lg md:pb-20 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        </div>
        <button onClick={() =>{setSaveData(singleReply)}} className="ml-4 w-20 h-10  relative right-5 lg:right-0 md:right-20 lg:top-0 top-7 md:top-16 bg-indigo-600 text-white rounded-lg font-medium text-sm hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300">
          SEND
        </button> 
      </div>
    </div>
    </>
  );
}

export default Comment;
