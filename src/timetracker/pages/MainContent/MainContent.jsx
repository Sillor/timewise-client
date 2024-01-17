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
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, inputs]);
    setInputs({
      Summary: "",
      Project: "",
      TimeStart: "",
      TimeEnd: "",
      Date: "",
    });
  };

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
              className="TimeStart w-2/12 p-2 rounded-lg"
              name="TimeStart"
              value={inputs.TimeStart}
              onChange={handleInputChange}
            />
            <input
              type="time"
              className="TimeEnd w-2/12 p-2 rounded-lg"
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
          {dummyData.map((value) => {
            return <EntryItem props={value} key={value.key} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MainContent;

const dummyData = [
  {
    key: 11111111,
    date: "1/1/2022",
    project: "Project 1",
    hours: "10:00am - 1:00pm",
    description: "Worked on feature 1",
    groupName: "Cohort 444",
  },
  {
    key: 11111112,
    date: "5/1/2023",
    project: "Project 2",
    hours: "6:00pm - 9:00pm",
    description: "Worked on feature 21",
    groupName: "Cohort 444",
  },
  {
    key: 11111113,
    date: "10/1/2023",
    project: "Project 4",
    hours: "1400 - 1700",
    description: "Worked on feature 3",
    groupName: "Cohort 444",
  },
  {
    key: 111111114,
    date: "1/1/2022",
    project: "Project 1",
    hours: "10:00am - 1:00pm",
    description: "Worked on feature 1",
    groupName: "Cohort 444",
  },
  {
    key: 1111115,
    date: "5/1/2023",
    project: "Project 2",
    hours: "6:00pm - 9:00pm",
    description: "Worked on feature 21",
    groupName: "Cohort 444",
  },
  {
    key: 1111116,
    date: "10/1/2023",
    project: "Project 4",
    hours: "1400 - 1700",
    description: "Worked on feature 3",
    groupName: "Cohort 444",
  },
  {
    key: 1111111124,
    date: "1/1/2022",
    project: "Project 1",
    hours: "10:00am - 1:00pm",
    description: "Worked on feature 1",
    groupName: "Cohort 444",
  },
  {
    key: 11131115,
    date: "5/1/2023",
    project: "Project 2",
    hours: "6:00pm - 9:00pm",
    description: "Worked on feature 21",
    groupName: "Cohort 444",
  },
  {
    key: 11411116,
    date: "10/1/2023",
    project: "Project 4",
    hours: "1400 - 1700",
    description: "Worked on feature 3",
    groupName: "Cohort 444",
  },
];
