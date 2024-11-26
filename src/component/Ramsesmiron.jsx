import ram from "../img/ramsesmiron.png";
import PlusMinusButton from "../component/PlusMinusButton";
import ReplyButton from "../component/ReplyButton";
import minus from "../img/minus.svg";
import plus from "../img/plus.svg";




function Ramsesmiron (){


    return (
        <>
         <div className="flex justify-center items-center m-8">
          <div className="bg-white border flex flex-col lg:flex-row rounded-lg p-3 lg:p-5 w-3/4 ">
            <div className="flex flex-wrap-reverse  lg:flex-nowrap">
              <div className="">
                <div className="bg-blue-50  w-full lg:w-12 lg:flex-col lg:flex  hidden justify-center items-center lg:border-0 rounded-0 border-2 rounded-2xl ">
                  <button className="flex  justify-center  rounded-2xl items-center w-10 h-10  hover:bg-indigo-300 ">
                    <img src={minus} alt=""></img>
                  </button>

                  <p className=" text-indigo-700 text-center text-xl p-2">1</p>

                  <button className="flex  justify-center rounded-2xl items-center  w-10 h-10 hover:bg-indigo-300 ">
                    <img src={plus} alt=" "></img>
                  </button>
                </div>
              </div>
              <div className=" p-4 ">
                <div className="w-full flex items-center justify-start p-2">
                  <img src={ram} className="w-10 h-10 mr-3" alt=""></img>
                  <h3 className="font-bold mr-2">ramsesmiron</h3>
                  <p className="text-gray-500  hidden sm:flex">1 month ago</p>
                </div>
                <p className="md:text-lg text-sm font-samibold text-gray-500">
                  Impressive! Though it seems the drag feature could be
                  improved. But overall it looks incredible. You've nailed the
                  design and the responsiveness at various breakpoints works
                  really well.
                </p>
                <div className=" flex justify-between items-center  lg:hidden">
                  <div className="">
                    
                    <PlusMinusButton />
                  </div>
                  <ReplyButton />
                </div>
              </div>
            </div>
            <div className="mr-8 hidden lg:flex justify-end">
              <ReplyButton  />
            </div>
          </div>
        </div>
        </>
    )
} 
export default Ramsesmiron;