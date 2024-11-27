import jul from "../img/juliusomo.png";
import PlusMinusButton from "./PlusMinusButton";
import DeleteEidt from "./DeleteEidt";
import minus from "../img/minus.svg";
import plus from "../img/plus.svg";
import { useSave } from "./zustand";
import { useStore } from "./zustand";
function DataUpdate({ handleAlert, reply }) {
  const { SaveData, commentOpen, setcommentOpen } = useSave();
  const { showReply } = useStore();

  console.log("id", showReply);
  return (
    <>
     
          <div className="bg-red-500 flex justify-center items-center sm:m-8">
            <div className="bg-white border flex flex-col lg:flex-row rounded-lg p-5 w-3/4">
              <div className="flex flex-wrap-reverse lg:flex-nowrap">
                <div className="">
                  <div className="bg-blue-50 w-full lg:w-12 lg:flex-col lg:flex hidden justify-center items-center lg:border-0 rounded-0 border-2 rounded-2xl">
                    <button className="flex justify-center rounded-2xl items-center w-10 h-10 hover:bg-indigo-300">
                      <img src={minus} alt="" />
                    </button>

                    <p className="text-indigo-700 text-center text-xl p-2">1</p>

                    <button className="flex justify-center rounded-2xl items-center w-10 h-10 hover:bg-indigo-300">
                      <img src={plus} alt="" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="w-full flex items-center justify-start p-2">
                    <img src={jul} className="w-10 h-10 mr-3" alt="" />
                    <h3 className="font-bold mr-2">amyrobson</h3>
                    <p className="text-gray-500 hidden sm:flex">1 month ago</p>
                  </div>
                  <p className="md:text-lg text-sm font-samibold text-gray-500">
                    {reply.message}
                  </p>
                  <div className="flex justify-between items-center lg:hidden">
                    <div>
                      {/* <PlusMinusButton id={reply.id} SaveData={SaveData} /> */}
                    </div>
                    {/* <DeleteEidt handleAlert={handleAlert} /> */}
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
