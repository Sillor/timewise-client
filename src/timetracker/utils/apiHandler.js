export const history = {
  navigate: null,
};

function getJWT() {
  return sessionStorage.getItem("timewise_jwt_token");
}

export function isLoggedIn() {
  return !!sessionStorage.getItem("timewise_is_authenticated");
}

export async function register(email, password) {
  try {
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.success) {
      sessionStorage.setItem("timewise_is_authenticated", true);
      sessionStorage.setItem("timewise_jwt_token", data.token);
      history.navigate("/tracker");
    }
    return data
  } catch (error) {
    return {
      message: `An error occurred: ${error.message}`,
      success: false,
    }
  }
}

export async function login(email, password) {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.success) {
      sessionStorage.setItem("timewise_is_authenticated", true);
      sessionStorage.setItem("timewise_jwt_token", data.token);
      history.navigate("/tracker");
    }
    return data;
  } catch (error) {
    return {
      success: false,
      message: `An error occurred: ${error.message}`,
    }
  }
}

export function logout() {
  sessionStorage.removeItem("timewise_is_authenticated");
  sessionStorage.removeItem("timewise_jwt_token");
  return history.navigate("/login");
}
