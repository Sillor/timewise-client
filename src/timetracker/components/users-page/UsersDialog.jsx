import { useRef } from "react";
import { Dialog } from "@headlessui/react";

const UsersDialog = (props) => {
  const cancelButtonRef = useRef(null);

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
        <Dialog.Panel className="w-[428px]  rounded bg-gray-800 text-white py-[50px] px-10">
          <Dialog.Title className="text-[32px] mb-4">
            Create new users
          </Dialog.Title>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={props.form.name}
            onChange={event => props.setForm({ ...props.form, name: event.target.value })}
            required
            className="text-black w-full mb-4 px-[9px] py-[14px] h-[43px] rounded-[6px]"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            value={props.form.email}
            onChange={event => props.setForm({ ...props.form, email: event.target.value })}
            required
            className="text-black w-full mb-4 px-[9px] py-[14px] h-[43px] rounded-[6px]"
          />
          <div className="flex justify-between">
            <button
              onClick={props.handleClose}
              className="bg-gray-500 hover:bg-gray-600 w-[155px] h-[48px] rounded-[6px]"
            >
              Cancel
            </button>
            <button
              ref={cancelButtonRef}
              onClick={() => {
                if (!props.form.name || !props.form.email) {
                    console.log("Please enter name and email");
                } else {
                    props.handleCreateUser();
                    props.handleClose();
                }
              }}
              className="bg-orange-500 hover:bg-orange-600 w-[155px] h-[48px] rounded-[6px]"
            >
              Create New User
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default UsersDialog;
