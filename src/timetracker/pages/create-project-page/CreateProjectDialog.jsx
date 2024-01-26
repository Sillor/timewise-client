/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Button from "../../components/button-component/Button";
import { createProject } from "../../utils/dbHandler";

const CreateProjectDialog = (props) => {
  useEffect(() => {
    // Add 'overflow-hidden' to body when the dialog is open
    document.body.classList.add("overflow-hidden");

    // Remove 'overflow-hidden' from body when the dialog is closed
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, []);

const { setOpen } = props;

const [errormsg, setErrormsg] = useState();
const [projectname, setProjectName] = useState({ projectName: "" });

const changeHandler = (e) => {
  setProjectName({ [e.target.name]: e.target.value });
};
const submitHandler = async (e) => {
  e.preventDefault();
  const data = await createProject(projectname)
  const messageData = data.message;
  if (data.success) {
    setOpen(false);
    props.updateProjects()
  } else {
    setErrormsg(messageData);
  }
};

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
          <Button
            className="!bg-[#303036] hover:!bg-[#3c3c3f] py-2 px-2 md:px-4 font-semibold shadow-md w-full"
            onClick={props.handleClose}
          >
            Cancel
          </Button>
          {/* Create project button */}
          <Button
            className="px-2 py-2 md:px-4 font-semibold shadow-md w-full"
            onClick={submitHandler}
          >
            Create Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectDialog;