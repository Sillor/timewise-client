import { useEffect } from "react";

const DeleteUserDialog = (props) => {
  useEffect(() => {
    // Add 'overflow-hidden' to body when the dialog is open
    document.body.classList.add("overflow-hidden");

    // Remove 'overflow-hidden' from body when the dialog is closed
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  function handleClick(event) {
    const dialog = document.querySelector(".dialog");

    // Close dialog if the click target is not a descendant of dialog
    if (!dialog.contains(event.target)) {
      props.handleClose();
    }
  }

  return (
    // Container for dialog panel
    <div
      className="fixed z-50 inset-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center"
      onClick={handleClick}
    >
      {/* Dialog panel */}
      <div className="dialog rounded-md shadow-md p-8 w-80 sm:w-[428px]">
        {/* Dialog header */}
        <h1 className="text-light text-center text-[20px] font-bold lg:text-[32px] mb-5">
          Delete User
        </h1>
        {/* Dialog text */}
        <p className="text-light text-center mb-5">Are you sure you want to delete this user?</p>
        <div className="flex justify-between space-x-5">
          {/* Cancel button */}
          <button
            className="bg-[#303036] text-light py-2 px-2 md:px-4 rounded-md font-semibold shadow-md w-full"
            onClick={props.handleClose}
          >
            Cancel
          </button>
          {/* Delete user button */}
          <button
            className="bg-secondary text-light px-2 py-2 md:px-4 rounded-md font-semibold shadow-md w-full"
            onClick={() => {
              props.handleClose();
              props.handleDeleteUser(props.userID);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserDialog;
