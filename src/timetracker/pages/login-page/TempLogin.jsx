import React, { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../../utils/apiHandler";

export default function TempLogin() {
  const [data, setData] = useState({ email: "test@test.com", password: "testtesttest!!!", error: "" });
  const navigate = useNavigate();

  function handleEmail(event) {
    const val = event.currentTarget.value;
    setData((prev) => ({ ...prev, email: val }));
  }
  function handlePassword(event) {
    const val = event.currentTarget.value;
    setData((prev) => ({ ...prev, password: val }));
  }

  async function handleLogin() {
    const status = await login(data.email, data.password);
    setData((prev) => ({ ...prev, error: status.message }));
  }

  return (
    <div className="text-black">
      <input type="text" value={data.email} onChange={handleEmail} />
      <br/>
      <input type="text" value={data.password} onChange={handlePassword} />
      <br />
      {data.error}
      <br />
      <button type="button" onClick={handleLogin}>
        login
      </button>
    </div>
  );
}
