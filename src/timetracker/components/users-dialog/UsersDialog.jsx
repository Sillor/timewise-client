import { useRef } from "react";
import { Dialog } from "@headlessui/react";

const UsersDialog = (props) => {
  const cancelButtonRef = useRef(null);

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  return (
    <Dialog
      initialFocus={cancelButtonRef}
      open={props.open}
      onClose={props.handleClose}
      className="relative z-50"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Container for the dialog panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* Dialog panel */}
        <Dialog.Panel className="w-[350px] sm:w-[428px]  rounded bg-gray-800 text-white py-[50px] px-10">
          <Dialog.Title className="text-[32px] mb-4">
            Create new users
          </Dialog.Title>
          <form
            onSubmit={(event) => {
              props.handleCreateUser(event);
              props.handleClose();
            }}
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={props.form.name}
              onChange={(event) =>
                props.setForm({ ...props.form, name: event.target.value })
              }
              onKeyDown={handleKeyPress}
              required
              className="text-black w-full mb-4 px-[9px] py-[14px] h-[43px] rounded-[6px]"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              value={props.form.email}
              onChange={(event) =>
                props.setForm({ ...props.form, email: event.target.value })
              }
              onKeyDown={handleKeyPress}
              required
              className="text-black w-full mb-4 px-[9px] py-[14px] h-[43px] rounded-[6px]"
            />
            <div className="flex justify-between">
              <button
                onClick={props.handleClose}
                className="bg-gray-500 hover:bg-gray-600 p-2 w-[118px] sm:w-[155px] h-auto sm:h-[48px] rounded-[6px]"
              >
                Cancel
              </button>
              <button
                type="submit"
                ref={cancelButtonRef}
                className="bg-orange-500 hover:bg-orange-600 p-2 w-[118px] sm:w-[155px] h-auto rounded-[6px]"
              >
                Create New User
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default UsersDialog;
