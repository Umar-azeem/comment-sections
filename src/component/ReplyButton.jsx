import reply from "../img/reply.svg";
import { useSave } from "./zustand.js";

function ReplyButton({item}){
const {ChangeReply} =useSave()

    return(
      <>
        <span >
          <button onClick={() => {ChangeReply(item.id)}} className="pl-3 justify-center items-center  md:w-14 w-8 h-5 md:h-10 flex lg:justify-center lg:items-center text-indigo-700 font-bold text-sm md:text-lg mr-4">
            <img className="flex justify-center items-center text-center p-1 md:p-3" src={reply} alt="reply"></img>Reply
          </button>
        </span>
      </>
    );
  }
  export default ReplyButton;