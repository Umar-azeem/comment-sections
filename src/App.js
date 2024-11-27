import "./App.css";
import Comment from "./component/Comment.jsx";
import DataUpdate from "./component/DataUpdate";
import { useState } from "react";
function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [showEidt, setShowEidt] = useState(false);
  const handleAlert = () =>  {
    setShowAlert(!showAlert);
  };

  const handleEidtInputComt = () =>  {
    setShowEidt(!showEidt);
  };
  
  return (
    <>
      <section>
        <DataUpdate showEidt={showEidt} showAlert={showAlert} handleAlert={handleAlert}  handleEidtInputComt={handleEidtInputComt}/> 
        <Comment/>   
      </section>
    </>
  );
}
export default App;