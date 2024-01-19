import React, { useState, useEffect } from "react";
import "./MainContent.css";
import EntryItem from "../../components/entry-item-component/EntryItem";

function MainContent() {
  const [inputs, setInputs] = useState({
    Summary: "",
    Project: "",
    TimeStart: "",
    TimeEnd: "",
    Date: "",
    id: 12312414
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleFocus = (e) => {
    e.target.placeholder = "";
    e.target.type = "date";
    e.target.style.color = "black";
}

const handleBlur = (e) => {
    if (!e.target.value){
      e.target.placeholder = "Today"
       e.target.type = "text"
      }
}

useEffect(() => {
    const dateInput = document.getElementById("dateInput");
    if (dateInput.value === "") {
        dateInput.type = "text";
    }
}, []);

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      key: new Date().getTime(), 
      Date: inputs.Date,
      Project: inputs.Project,
      Hours: `${inputs.TimeStart} - ${inputs.TimeEnd}`,
      Description: inputs.Summary,
      id: randomNumber(),
    };
    setSubmittedData([...submittedData, newEntry]);
    setInputs({
      Summary: "",
      Project: "",
      TimeStart: "",
      TimeEnd: "",
      Date: "",
      id: "",
    });
  };


function deleteProject(id) {
    if(id) {
            setSubmittedData(prevData => prevData.filter(item => item.id !== id))
    }
}

function randomNumber(){
    const number = Math.ceil(Math.random() * 10000000);
    return number
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
              <input
                className="w-full p-2 rounded-lg hover:shadow-lg"
                name="Project"
                value={inputs.Project}
                onChange={handleInputChange}
                placeholder="Project"
              />
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
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="py-2 w-10/12 lg:py-2 lg:px-4 lg:w-2/5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
        <div>
          {submittedData.map((value) => {
            return <EntryItem props={value} deleteFn={deleteProject} key={value.key} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
