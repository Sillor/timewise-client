import { useState, useEffect } from "react";
import UsersDialog from "../../components/users-dialog/UsersDialog";
import { usersData } from "../../../UsersData";

const Users = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState(usersData);
  const [form, setForm] = useState(initializeForm());

  useEffect(() => {
    // Retrieve data from session storage
    const storedUsers = JSON.parse(sessionStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, [setUsers]);

  useEffect(() => {
    // Save data to session storage
    sessionStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  function initializeForm() {
    return { name: "", email: "" }
  }

  function handleCreateUser() {
    const newUser = {
      id: users.length + 1,
      name: form.name,
      email: form.email
    };
    
    setUsers([...users, newUser]);
    setForm(initializeForm());
  }
  
  function handleDeleteUser(id) {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  }  

  return (
    <div className="min-h-screen text-white p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-[48px] font-bold mt-[43px] mb-[36px]">Users</h1>
        <button
          className="text-base font-semibold bg-orange-500 hover:bg-orange-600 w-[216px] h-[48px] rounded-[6px] shadow-[0_4px_4px_0_rgba(0,0,0,0.3)] mb-4"
          onClick={() => setOpen(true)}
        >
          Create New User
        </button>

        <UsersDialog 
          open={open}
          handleClose={() => setOpen(false)}
          handleCreateUser={handleCreateUser}
          form={form}
          setForm={setForm}
        />

        <table className="table-auto text-left max-w-72 sm:min-w-96 md:min-w-[650px] lg:min-w-[950px] rounded-[4px] overflow-hidden">
          <thead className="text-sm bg-gray-700">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email Address</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t bg-gray-800 border-gray-700">
                <td className="px-6 py-3 break all">{user.name}</td>
                <td className="px-6 py-3 break-all">{user.email}</td>
                <td className="px-6 py-3 text-center">
                  <span className="material-symbols-outlined cursor-pointer select-none" onClick={() => handleDeleteUser(user.id)}>
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
