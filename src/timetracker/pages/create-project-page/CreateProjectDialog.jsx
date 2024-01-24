/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const CreateProjectDialog = (props) => {
  useEffect(() => {
    // Add 'overflow-hidden' to body when the dialog is open
    document.body.classList.add("overflow-hidden");

    // Remove 'overflow-hidden' from body when the dialog is closed
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, []);

const{setOpen} = props
 
 let [errormsg,setErrormsg] = useState()
 let [projectname,setProjectName]=useState({projectName:''})

 let changeHandler=(e)=>{
   setProjectName({[e.target.name]:e.target.value})
 }
 let submitHandler= async (e)=>{
   e.preventDefault()
   const response = await fetch("http://localhost:3002/createProject", {
   method: "PUT",
   body: JSON.stringify(projectname),
   headers: new Headers({
     "Content-type": "application/json; charset=UTF-8",
     "Authorization": `Bearer ${document.cookie}`
   })
 })
   let data = await response.json()
   let messageData = data.message
   setErrormsg (messageData)
   if(!messageData){
     setOpen(false)
     location.reload(true)
   }
 }

  function handleClick(event) {
    const dialog = document.querySelector(".dialog")

    // Close dialog if the click target is not a descendant of dialog
    if (!dialog.contains(event.target)) {
      props.handleClose();
    }
  }

  return (
    // Container for dialog panel
    <div className="fixed inset-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center" onClick={handleClick}>
      {/* Dialog panel */}
      <div className="dialog rounded-md shadow-md p-8 sm:w-[428px]">
        {/* Dialog header */}
        <h1 className="text-light text-center text-[20px] font-bold lg:text-[32px] mb-5">
          Create New Project
        </h1>
        {/* Project name field */}
        <div>
          <input
            id="projectname"
            type="text"
            name="projectName"
            placeholder="Project Name"
            className="text-black rounded-md p-3 outline-none w-full"
            onChange={(e) => changeHandler(e)}
          ></input>
        </div>
        {/* Error message */}
        {
              (errormsg)?
              <div>
              <p className="text-red-600">{errormsg}</p>
            </div>
            :
            ''
             }
        <div className="flex justify-between space-x-5 mt-5">
          {/* Cancel button */}
          <button
            className="bg-[#303036] text-light py-2 px-2 md:px-4 rounded-md font-semibold shadow-md w-full"
            onClick={props.handleClose}
          >
            Cancel
          </button>
          {/* Create project button */}
          <button
            className="bg-secondary text-light px-2 py-2 md:px-4 rounded-md font-semibold shadow-md w-full"
            onClick={submitHandler}
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectDialog;