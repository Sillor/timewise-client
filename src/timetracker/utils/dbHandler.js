export async function getProjects() {
  try {
    const response = await fetch("http://localhost:5001/loadProjects", {
      method: "PUT",
      credentials: "include",
    });
    let data = await response.json();
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

/**
 *
 * @returns {{success: boolean, message?: string, data?: {localID: string, summary: string, start: string, end: string, parentProject: string}[]}}
 */
export async function getEntries() {
  try {
    const response = await fetch("http://localhost:5001/loadEntries", {
      method: "PUT",
      credentials: "include",
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

export async function createEntry(entryData) {
  try {
    const response = await fetch("http://localhost:5001/createEntry", {
      method: "PUT",
      credentials: "include",
      body: JSON.stringify(entryData),
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

export async function updateEntry(entryData, del = null) {
  try {
    const response = await fetch("http://localhost:5001/updateEntry", {
      method: "PUT",
      credentials: "include",
      body: JSON.stringify({ ...entryData, deleted: del }),
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
