import jul from "../img/juliusomo.png";
import minus from "../img/minus.svg";
import plus from "../img/plus.svg";
import { useStore } from "./zustand";
function DataUpdate({ reply }) {
  const { showReply } = useStore();
 
  return (
    <>
      <div className=" flex flex-col lg:flex-row pl-2 md:pl-5 rounded-sm w-3/4 border-x-4 md:border-x-8 border-r-0 border-gray-300">
        <div className="bg-white border flex flex-col lg:flex-row rounded-lg  md:p-2 w-full ">
          <div className="flex flex-wrap-reverse  lg:flex-nowrap">
            <div className="">
              <div className="bg-blue-50 w-full lg:w-12 lg:flex-col lg:flex hidden justify-center items-center lg:border-0 rounded-0 border-2 rounded-2xl">
                <button className="flex justify-center rounded-2xl items-center w-5 h-5 md:w-10 md:h-10 hover:bg-indigo-300">
                  <img src={minus} alt="" />
                </button>

                <p className="text-indigo-700 text-center text-xl  md:p-2">1</p>

                <button className="flex justify-center rounded-2xl items-center w-5 h-5 md:w-10 md:h-10 hover:bg-indigo-300">
                  <img src={plus} alt="" />
                </button>
              </div>
            </div>
            <div className="p-1 md:p-4">
              <div className="w-full flex items-center justify-start p-2">
                <img src={jul} className="w-5 h-5 md:w-10 md:h-10 mr-3" alt="" />
                <h3 className="md:font-bold font-semibold sm:text-sm md:text-lg mr-2">amyrobson</h3>
                <p className="text-gray-500 hidden sm:flex">1 month ago</p>
              </div>
              <p className="md:text-lg text-xs mr-4 md:mr-0  font-samibold text-gray-500">
                {reply.singleReply}
              </p>
              <div className="flex justify-between items-center lg:hidden">
                <div></div>
              </div>
            </div>
          </div>
          <div className="mr-8 hidden lg:flex justify-end">
            {/* <DeleteEidt handleAlert={handleAlert} /> */}
          </div>
        </div>
       </div>
    </>
  );
}

export default DataUpdate;
