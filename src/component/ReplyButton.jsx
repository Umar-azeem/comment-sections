import { useState } from "react";
import reply from "../img/reply.svg";
import { useSave } from "./zustand.js";

function ReplyButton({item}){
const {ChangeReply} =useSave()
    return (
      <>
        <span >
          <button onClick={() => ChangeReply(item.id)} className="w-14 h-10 flex lg:justify-center lg:items-center text-indigo-700 font-bold text-lg mr-4">
            <img className="p-3" src={reply} alt="reply"></img>Reply
          </button>
        </span>
      </>
    );
  }
  export default ReplyButton;