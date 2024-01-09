import React, { useState } from "react";

function NewEntryForm() {
  const [dateType, setDateType] = useState("text");
  const [timeType, setTimeType] = useState("text");
  const [formData, setFormData] = useState({
    summary: "",
    project: "",
    timeStart: "",
    timeEnd: "",
    date: "",
  });

  function handleSubmit() {}

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center gap-3 rounded-lg bg-sea-blue bg-opacity-50 p-5 text-xs"
    >
      <h2 className="text-3xl font-bold w-full text-left">New Entry</h2>
      <div className="flex gap-2.5 w-full">
        <div className="flex flex-col w-full gap-2.5 text-black">
          <input
            required
            className="w-full rounded-md p-2"
            type="text"
            placeholder="Summary"
          />

          <div className="flex gap-1 items-center *:rounded-md *:max-h-8 ">
            <input
              required
              className="w-28 p-2"
              type={timeType}
              onFocus={() => setTimeType("time")}
              placeholder="Time Start"
            />
            <p className="text-white text-2xl">-</p>
            <input
              required
              className="w-28 p-2"
              type={timeType}
              onFocus={() => setTimeType("time")}
              placeholder="Time End"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2.5 w-24 text-black *:rounded-md *:p-2">
          <input required type="text" placeholder="Project" />
          <input
            required
            placeholder="Today"
            type={dateType}
            onFocus={() => setDateType("date")}
          />
        </div>
      </div>
      <button
        className="w-2/3 bg-orange-400 p-4 rounded-md font-bold"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default NewEntryForm;
