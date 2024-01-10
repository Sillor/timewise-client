import { useState } from "react";
import UsersDialog from "./UsersDialog";

const Users = () => {
  const [open, setOpen] = useState(false);

  // Dummy data
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
    },
    {
      id: 2,
      name: "John Schmoe",
      email: "jschmmmoe@gmail.com",
    },
    {
      id: 3,
      name: "Jane Schmoe",
      email: "JaneSchmoes@aol.com",
    },
    {
      id: 4,
      name: "John Doe",
      email: "johndoe@gmail.com",
    },
    {
      id: 5,
      name: "John Doe",
      email: "johndoe@gmail.com",
    },
  ];

return (
  <div className="min-h-screen bg-gray-900 text-white">
    <div className="flex flex-col items-center">
      <h1 className="text-[48px] font-bold mt-[59px] mb-[36px]">Users</h1>
      <button
        className="text-base font-semibold bg-orange-500 hover:bg-orange-600 w-[216px] h-[48px] rounded-[6px] shadow-[0_4px_4px_0_rgba(0,0,0,0.3)] mb-4"
        onClick={() => setOpen(true)}
      >
        Create New User
      </button>

      <UsersDialog 
        open={open}
        handleClose={() => setOpen(false)}
      />

      <table className="table-auto text-left sm:min-w-96 md:min-w-[650px] rounded-[4px] overflow-hidden">
        <thead className="text-sm bg-gray-700">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email Address</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t bg-gray-800 border-gray-700">
              <td className="px-6 py-3">{user.name}</td>
              <td className="px-6 py-3">{user.email}</td>
              <td className="px-6 py-3 text-center">
                <span className="material-symbols-outlined cursor-pointer select-none">
                  delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};

export default Users;
