import { useState, useEffect } from "react";
import UsersDialog from "../../components/users-dialog/UsersDialog";
import Button from "../../components/button-component/Button";

const Users = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(initializeForm());

  const clickHandler = () => {
    setOpen(!open);
    setForm(initializeForm());
  };

  function initializeForm() {
    return { email: "" }
  }

  // Retrieve data from database
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5001/loadUsers", {
        method: "GET",
        credentials: "include"
      })

      const data = await response.json();
      const usersData = data.data;
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  const handleCreateUser = async () => {
    try {
      const newUser = {
        email: form.email,
      };

      const response = await fetch("http://localhost:5001/createUser", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(newUser),
        credentials: "include"
      });

      const data = await response.json();

      if (data.success) {
        // Update users state
        fetchUsers();
      } 

      return data;
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteUser = async (id) => {
    try {
      await fetch(`http://localhost:5001/deleteUser/${id}`, {
        method: "DELETE",
        credentials: "include"
      })

      // Update users state
      const updatedUsers = users.filter(user => user.ID != id);
      setUsers(updatedUsers);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div className="min-h-screen text-white p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-[48px] font-bold mt-[43px] mb-[36px]">Users</h1>
        <Button
          className="text-base font-semibold w-[216px] h-12 shadow-md mb-4"
          onClick={clickHandler}
        >
          Create New User
        </Button>
        
        {open && (
          <UsersDialog
            handleClose={clickHandler}
            handleCreateUser={handleCreateUser}
            form={form}
            setForm={setForm}
          />
        )}

        <table className="table-auto text-left max-w-72 sm:min-w-96 md:min-w-[650px] lg:min-w-[950px] rounded-[4px] overflow-hidden">
          <thead className="text-sm bg-gray-700">
            <tr>
              <th className="px-6 py-3">Email Address</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.ID}
                className="border-t bg-gray-800 border-gray-700"
              >
                <td className="px-6 py-3 break-all">{user.email}</td>
                <td className="px-6 py-3 text-center">
                  <span
                    className="material-symbols-outlined cursor-pointer select-none"
                    onClick={() => handleDeleteUser(user.ID)}
                  >
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
