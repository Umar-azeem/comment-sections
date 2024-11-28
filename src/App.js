import "./App.css";
import Comment from "./component/Comment.jsx";
import DataUpdate from "./component/DataUpdate";
import { useState } from "react";
function App() {
  const [showEidt, setShowEidt] = useState(false);
  const handleEidtInputComt = () =>  {
    setShowEidt(!showEidt);
  };
  
  return (
    <>
      <section>
        <DataUpdate showEidt={showEidt}  handleEidtInputComt={handleEidtInputComt}/> 
        <Comment/>   
      </section>
    </>
  );
}
export default App;