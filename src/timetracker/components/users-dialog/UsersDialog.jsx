import { useEffect } from "react";

const UsersDialog = (props) => {
  useEffect(() => {
    // Add 'overflow-hidden' to body when the dialog is open
    document.body.classList.add("overflow-hidden");

    // Remove 'overflow-hidden' from body when the dialog is closed
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, []);

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
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
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center" onClick={handleClick}>
      {/* Dialog panel */}
      <div className="dialog rounded-md shadow-md p-8 sm:w-[428px]">
        {/* Dialog header */}
        <h1 className="text-light text-center text-[20px] font-bold lg:text-[32px] mb-5">
          Create New User
        </h1>
        {/* Form */}
        <form
          onSubmit={(event) => {
            props.handleCreateUser(event);
            props.handleClose();
          }}
        >
          {/* Email field */}
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email address"
            className="text-black rounded-md p-3 outline-none w-full mb-5"
            value={props.form.email}
            onKeyDown={handleKeyPress}
            required
            onChange={(event) =>
              props.setForm({ ...props.form, email: event.target.value })
            }
          />
          <div className="flex justify-between space-x-5">
            {/* Cancel button */}
            <button
              className="bg-[#303036] text-light py-2 px-2 md:px-4 rounded-md font-semibold shadow-md w-full"
              onClick={props.handleClose}
            >
              Cancel
            </button>
            {/* Create new user button */}
            <button
              type="submit"
              className="bg-secondary text-light px-2 py-2 md:px-4 rounded-md font-semibold shadow-md w-full"
            >
              Create New User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UsersDialog;