import React, { useState, useEffect } from "react";
import "./MainContent.css";
import EntryItem from "../../components/entry-item-component/EntryItem";
import Button from "../../components/button-component/Button";
import StatusMessage from "../../components/form-components/StatusMessage";
import {
  createEntry,
  getEntries,
  getProjects,
  updateEntry,
} from "../../utils/dbHandler";
import {
  joinDateAndTime,
} from "../../utils/dateFormatter";

function MainContent() {
  const [inputs, setInputs] = useState({
    Summary: "",
    Project: "",
    TimeStart: getCurrentTime(),
    TimeEnd: getCurrentTime(),
    Date: "",
  });
  const [submittedData, setSubmittedData] = useState([]);
  const [projects, setProjects] = useState([]);
  const [animateNewItem, setAnimateNewItem] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    success: false,
    message: "",
  });

  useEffect(() => {
    const dateInput = document.getElementById("dateInput");
    if (dateInput.value === "") {
      dateInput.type = "text";
    }
    updateEntires();
    updateProjects();
  }, []);

  async function updateEntires() {
    const res = await getEntries();
    const data = res.data;
    if (data.success === false) return;
    const entries = data.map((entry, i) => {
      return {
        key: i,
        id: entry.localID,
        summary: entry.summary,
        start: entry.start,
        end: entry.end,
        parentProject: entry.parentProject,
      };
    });
    setSubmittedData(entries.toSorted((a,b)=>new Date(b.start)-new Date(a.start)));
  }

  function changeEntry(obj, del) {
    updateEntry(obj, del);
    updateEntires()
    if (del) deleteProject(obj.localID);
  }

  async function updateProjects() {
    const res = await getProjects();
    const projectNames = res.data.map((project) => project.projectName);
    setProjects(projectNames);
  }

  function getCurrentTime() {
    return new Date().toTimeString().split(":").slice(0, 2).join(":");
  }

  const handleFocus = (e) => {
    e.target.placeholder = "";
    e.target.type = "date";
    e.target.style.color = "black";
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.placeholder = "Today";
      e.target.type = "text";
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (!value && name === "Date") {
      value = new Date().toLocaleDateString();
    }
    setInputs({ ...inputs, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAnimateNewItem(true); //trigger animation

    const validFields = Object.entries(inputs).every(([key, val]) => {
      if (val || key === "Date" || key === "Summary") return true;
      setErrorMessage({ success: false, message: key + " Field Empty" });
    });

    if (!validFields) return;

    const date = inputs.Date || new Date().toLocaleDateString();
    const startTime = joinDateAndTime(date, inputs.TimeStart);
    const endTime = joinDateAndTime(date, inputs.TimeEnd);

    const res = await createEntry({
      summary: inputs.Summary,
      parentProject: inputs.Project,
      start: startTime,
      end: endTime,
    });

    if (!res.success) {
      setErrorMessage({ success: res.success, message: res.message });
      return;
    }

    updateEntires();
    setInputs({
      Summary: "",
      Project: "",
      TimeStart: getCurrentTime(),
      TimeEnd: getCurrentTime(),
      Date: "",
    });
    setErrorMessage({ success: false, message: "" });

    setTimeout(() => setAnimateNewItem(false), 2000);
  };

  function deleteProject(id) {
    if (id) {
      setSubmittedData((prevData) => prevData.filter((item) => item.id !== id));
    }
  }

  return (
    <div className="appContainer">
      <h1 className="main-app-h1 text-white text-4xl lg:text-5xl font-bold text-center pt-10 mb-7">
        Time Tracker
      </h1>
      <div className="TrackerContainer rounded-xl h-3/12 w-[95%] lg:w-3/6 mx-auto p-4 lg:p-10">
        <h2 className="text-3xl font-semibold mb-4">New Entry</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="Summary w-[70%] lg:w-9/12">
              <input
                className="w-full p-2 rounded-lg hover:shadow-lg"
                name="Summary"
                value={inputs.Summary}
                onChange={handleInputChange}
                placeholder="Summary"
              />
            </div>
            <div className="Project w-[25%] lg:w-1/5">
              <label htmlFor="Project"></label>
              <select
                value={inputs.Project}
                name="Project"
                className="Project w-full p-2 rounded-lg hover:shadow-lg text-dark"
                onChange={handleInputChange}
              >
                <option disabled value="" className="hidden">
                  Project
                </option>
                {projects.length ? (
                  projects.map((project) => {
                    return (
                      <option key={project} value={project}>
                        {project}
                      </option>
                    );
                  })
                ) : (
                  <option disabled value="">
                    You Have No Projects
                  </option>
                )}
              </select>
            </div>
          </div>
          <div className="TimeFields flex justify-between items-center gap-[2px] lg:gap-[14px]">
            <input
              type="time"
              className="TimeStart w-4/12 lg:w-3/12 p-2 rounded-lg hover:shadow-lg"
              name="TimeStart"
              value={inputs.TimeStart}
              onChange={handleInputChange}
            />
            <span className="">-</span>
            <input
              type="time"
              className="TimeEnd w-4/12 lg:w-3/12 p-2 rounded-lg hover:shadow-lg"
              name="TimeEnd"
              value={inputs.TimeEnd}
              onChange={handleInputChange}
            />
            <div className="Date ml-auto w-[25%] lg:w-1/5">
              <input
                id="dateInput"
                type="date"
                className="w-full p-2 rounded-lg hover:shadow-lg"
                name="Date"
                value={inputs.Date}
                onChange={handleInputChange}
                onFocus={(e) => handleFocus(e)}
                onBlur={(e) => handleBlur(e)}
                placeholder="Today"
              />
            </div>
          </div>
          <StatusMessage
            success={errorMessage.success}
            message={errorMessage.message}
            className={"!text-black"}
          />
          <div className="w-full flex justify-center ">
            <Button
              type="submit"
              className="py-2 w-10/12 h-10 lg:py-2 lg:px-4 lg:w-2/5 !font-normal"
            >
              Submit
            </Button>
          </div>
        </form>
        <div>
          {submittedData.length ? submittedData.map((value, index) => {
            return (
              <EntryItem
                props={value}
                changeEntry={changeEntry}
                projects={projects}
                key={value.key}
                className={
                  index === submittedData.length - 1 && animateNewItem
                    ? "animate-slideDown"
                    : ""
                } //handles animation placement
              />
            );
          }): <div className="w-full text-center mt-4 mb-1 italic">No Entries</div>}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
