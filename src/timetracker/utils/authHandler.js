export const authData = {
  navigate: null,
  email: null,
  setEmail: null,
};

function setEmail(email) {
  if (email) {
    localStorage.setItem("timewise_email", email);
    authData.setEmail(email);
  } else {
    localStorage.removeItem("timewise_email");
    authData.setEmail(null);
  }
}

export function getEmail() {
  return localStorage.getItem("timewise_email") || null;
}

export function isLoggedIn() {
  return !!getEmail();
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
      setEmail(email);
      authData.navigate("/tracker");
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
      setEmail(email);
      authData.navigate("/tracker");
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
      method: "POST",
    });
    setEmail(null);
    return authData.navigate("/login");
  } catch (error) {
    return {
      success: false,
      message: `An error occurred: ${error.message}`,
    };
  }
}

export async function resetPassword(data) {
  try {
    const response = await fetch('http://localhost:5000/reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    return response.json();
  } catch (error) {
    return {
      success: false,
      message: `An error occurred: ${error.message}`
    }
  }
}