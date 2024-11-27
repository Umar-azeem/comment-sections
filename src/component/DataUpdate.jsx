import jul from "../img/juliusomo.png";
import PlusMinusButton from "./PlusMinusButton";
import DeleteEidt from "./DeleteEidt";
import minus from "../img/minus.svg";
import plus from "../img/plus.svg";
import { useSave } from "./zustand";
import AddReplyCmt from "./AddReplyCmt";
import Replybutton from "./ReplyButton";
import ReplyData from "./ReplyData";
import AlartDelete from "./AlartDelete";
import Eidtcomt from "./Eidtcomt";

function DataUpdate({ handleAlert, showAlert, handleEidtInputComt }) {
  const { SaveData, setIncrease, setDecrease } = useSave();
  const { setcommentOpen } = useSave();

  return (
    <>
      {
        <div>
          {SaveData.map((item) => (
            <>
              {item.commentOpen ? (
                <Eidtcomt
                  id={item.id}
                  handleEidtInputComt={handleEidtInputComt}
                />
              ) : (
                <div
                  key={item.id}
                  className="flex justify-center items-center sm:m-8"
                >
                  <div className="bg-white border flex justify-between flex-col  lg:flex-row rounded-lg p-5 w-3/4">
                    <div className="flex flex-wrap-reverse lg:flex-nowrap">
                      <div className="">
                        <div className="bg-blue-50 w-1/5   lg:w-12 lg:flex-col lg:flex hidden justify-center items-center lg:border-0 rounded-0 border-2 rounded-2xl">
                          <button
                            onClick={() => setIncrease(item.id)}
                            className="flex justify-center rounded-2xl items-center w-10 h-10 hover:bg-indigo-300"
                          >
                            <img src={minus} alt="" />
                          </button>

                          <p className="text-indigo-700 text-center text-xl p-2">
                            {item.likes}
                          </p>

                          <button
                            onClick={() => setDecrease(item.id)}
                            className="flex justify-center rounded-2xl items-center w-10 h-10 hover:bg-indigo-300"
                          >
                            <img src={plus} alt="" />
                          </button>
                        </div>
                      </div>
                      <div className="p-4 w-3/5">
                        <div className="w-full flex items-center justify-start p-2">
                          <img src={jul} className="w-10 h-10 mr-3" alt="" />
                          <h3 className="font-bold mr-2">amyrobson</h3>
                          <p className="text-gray-500 w-full hidden sm:flex justify-center items-center ">
                            1 month ago
                          </p>
                        </div>
                        <p className="md:text-lg w-full text-sm font-samibold text-gray-500">
                          {item.message}
                        </p>
                        <div className="flex justify-between items-center lg:hidden">
                          <div>
                            <>
                              {" "}
                              <PlusMinusButton item={item} />
                              <p>
                                {item.message}
                                {item.set}
                              </p>
                            </>
                          </div>
                          <DeleteEidt
                            id={item.id}
                            commentOpen={item.commentOpen}
                            setcommentOpen={setcommentOpen}
                            handleEidtInputComt={handleEidtInputComt}
                            handleAlert={handleAlert}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mr-8 hidden w-1/5 lg:flex justify-end">
                      <DeleteEidt
                        id={item.id}
                        setcommentOpen={setcommentOpen}
                        handleEidtInputComt={handleEidtInputComt}
                        handleAlert={handleAlert}
                      />
                      <Replybutton
                        id={item.id}
                        SaveData={SaveData}
                        item={item}
                      />
                      {/* Pass handleAlert here */}
                    </div>{" "}
                  </div>
                </div>
              )}
              {item.reply.map((reply) => (
                <div className="w-96">
                    sss
                  <ReplyData key={reply.id} reply={reply} />
                </div>
              ))}
              {item.showReply && (
                <>
                  {" "}
                  <AddReplyCmt  id={item.id} />  
                </>
              )}
              {showAlert && (
                <div className="absolute w-full top-10">
                  <AlartDelete id={item.id} handleAlert={handleAlert} />{" "}
                </div>
              )}
            </>
          ))}
        </div>
      }
    </>
  );
}

export default DataUpdate;
