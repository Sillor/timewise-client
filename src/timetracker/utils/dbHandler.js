export async function getProjects() {
  try {
    const response = await fetch("http://localhost:5001/loadProjects", {
      method: "PUT",
      credentials: "include",
    });
    let data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    return {
      success: false,
      data: [],
      message: error.message,
    };
  }
}

export async function createProject(projectName) {
  console.log(JSON.stringify(projectName));
  try {
    const response = await fetch("http://localhost:5001/createProject", {
      method: "PUT",
      credentials: "include",
      body: JSON.stringify(projectName),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}