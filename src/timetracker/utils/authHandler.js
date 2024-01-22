export const history = {
  navigate: null,
};

function setIsAuthenticated(value) {
  if (value) {
    sessionStorage.setItem("timewise_is_authenticated", true);
  } else {
    sessionStorage.removeItem("timewise_is_authenticated");
  }
}

function getIsAuthenticated() {
  return !!sessionStorage.getItem("timewise_is_authenticated");
}

export function isLoggedIn() {
  return getIsAuthenticated();
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
      setIsAuthenticated(true);
      history.navigate("/tracker");
    }
    return data;
  } catch (error) {
    return {
      message: `An error occurred: ${error.message}`,
      success: false,
    };
  }
}

export async function login(email, password) {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.success) {
      setIsAuthenticated(true);
      history.navigate("/tracker");
    }
    return data;
  } catch (error) {
    return {
      success: false,
      message: `An error occurred: ${error.message}`,
    };
  }
}

export async function logout() {
  try {
    await fetch("http://localhost:5000/logout", {
      method: "POST"
    })
    setIsAuthenticated(false);
    return history.navigate("/login");

  } catch (error) {
    return {
      success: false,
      message: `An error occurred: ${error.message}`
    }
  }
}
