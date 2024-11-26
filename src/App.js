import "./App.css";
// import Amyrobson from "./component/Amyrobson";
import Comment from "./component/Comment.jsx";
import DataUpdate from "./component/DataUpdate";
// import AlartDelete from "./component/AlartDelete";
// import Ramsesmiron from "./component/Ramsesmiron";
// import Maxblagun from "./component/Maxblagun.jsx";
import { useStore, useSave } from "./component/zustand.js";
import { useState } from "react";
// import PlusMinusButton from "./component/PlusMinusButton.jsx";
// import Eidtcomt from "./component/Eidtcomt.jsx";

function App() {
  const { showReplyid } = useStore();
  const [singleReply, setSingleReply] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [showEidt, setShowEidt] = useState(false);
  const [replyTo, setReplyTo] = useState(null); 
  const handleAlert = () =>  {
    setShowAlert(!showAlert);
  };

  const handleEidtInputComt = () =>  {
    setShowEidt(!showEidt);
  };
 

 
  // const handleReplyClick = (name) => {
  //     setReplyTo(name); 
  // }
  
  return (
    <>
    <section>
{/* 
    <div>
           
            <Amyrobson
                onReplyClick={() => handleReplyClick('Amyrobson')}
            />
            {replyTo === 'Amyrobson' && (
              <DataUpdate   showEidt={showEidt} showAlert={showAlert} handleAlert={handleAlert}  handleEidtInputComt={handleEidtInputComt} />
            )}

        
            <Ramsesmiron
                onReplyClick={() => handleReplyClick('Ramsesmiron')}
            />
            {replyTo === 'Ramsesmiron' && (
                <DataUpdate   showEidt={showEidt} showAlert={showAlert} handleAlert={handleAlert}  handleEidtInputComt={handleEidtInputComt} />
            )}

            <Maxblagun
                onReplyClick={() => handleReplyClick('Maxblagun')}
            />
            {replyTo === 'Maxblagun' && (
                <DataUpdate showEidt={showEidt} showAlert={showAlert} handleAlert={handleAlert}  handleEidtInputComt={handleEidtInputComt}/>
            )}

            <Comment />
        </div> */}
    </section>
    
      <section>
        {/*  <Amyrobson />    */}
        {/*  <Ramsesmiron />  */}
        {/*  <Maxblagun />    */}
        <DataUpdate showEidt={showEidt} showAlert={showAlert} handleAlert={handleAlert}  handleEidtInputComt={handleEidtInputComt}/> 
        <Comment/>   
      </section>
    </>
  );
}
export default App;