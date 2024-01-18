import React, { useState } from "react";
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
      <h1 className=" text-white text-5xl font-bold text-center mb-5">
        Time Tracker
      </h1>
      <div className="TrackerContainer rounded-xl h-3/12 w-3/6 mx-auto p-10">
        <h2 className="text-3xl font-bold mb-4">New Entry</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex justify-between">
            <div className="Summary w-9/12">
              <input
                className="w-full p-2 rounded-lg"
                name="Summary"
                value={inputs.Summary}
                onChange={handleInputChange}
                placeholder="Summary"
              />
            </div>
            <div className="Project w-1/5">
              <input
                className="w-full p-2 rounded-lg"
                name="Project"
                value={inputs.Project}
                onChange={handleInputChange}
                placeholder="Project"
              />
            </div>
          </div>
          <div className="TimeFields flex justify-between items-center gap-[23px]">
            <input
              type="time"
              className="TimeStart w-3/12 p-2 rounded-lg"
              name="TimeStart"
              value={inputs.TimeStart}
              onChange={handleInputChange}
            />
            <input
              type="time"
              className="TimeEnd w-3/12 p-2 rounded-lg"
              name="TimeEnd"
              value={inputs.TimeEnd}
              onChange={handleInputChange}
            />
            <div className="Date ml-auto w-1/5">
              <input
                type="date"
                className="w-full p-2 rounded-lg"
                name="Date"
                value={inputs.Date}
                onChange={handleInputChange}
                placeholder="Today"
              />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="py-2 px-4 w-2/5 bg-yellow-500 text-white rounded-lg"
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
