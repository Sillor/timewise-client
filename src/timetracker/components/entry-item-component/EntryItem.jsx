/* eslint-disable react/prop-types */
//create function that pushes or removes data from array
//create function that when you click on the time, then you
//can change it, if time is not inputted, then do not change

//overflow scroll or pagination -> set max height?
import { useRef, useState } from "react";
import {
  formatTime,
  getSqlDatetime,
  isoDate,
  joinDateAndTime,
  shortDate,
  shortTime,
  timeDifference,
} from "../../utils/dateFormatter";
import TrashIcon from "../../assets/TrashIcon";
import "./EntryItem.css";
import CalendarIcon from "../../assets/CalendarIcon";

const EntryItem = ({ props, changeEntry, projects }) => {
  const [inputs, setInputs] = useState(props);
  const dateElement = useRef(null);
  const dateStr = shortDate(inputs.start, true);
  const isoDateStr = isoDate(inputs.start);
  const startStr = shortTime(inputs.start);
  const endStr = shortTime(inputs.end);
  const hoursStr = timeDifference(inputs.start, inputs.end);

  function updateThisEntry(obj, del) {
    changeEntry(
      {
        localID: inputs.id,
        summary: inputs.summary,
        parentProject: inputs.parentProject,
        start: getSqlDatetime(inputs.start),
        end: getSqlDatetime(inputs.end),
        ...obj,
      },
      del
    );
    setInputs((prev) => ({ ...prev, ...obj }));
  }

  return (
    <div className="entry-item w-full flex justify-between max-w-[95%] md:w-full mx-auto my-3 bg-darkBlue rounded-md group p-4">
      <div className="w-full">
        <div className="flex items-center">
          <div className="inline text-xl font-bold">{dateStr}</div>
        </div>
        <div className="flex flex-col">
          <input
            className="entry-item--input inline w-full sm:w-40"
            defaultValue={inputs.summary}
            placeholder="Add summary"
            onBlur={(e) => {
              const val = e.currentTarget.value;
              if (inputs.summary == val) return;
              updateThisEntry({ summary: val });
            }}
          />
          <div className="flex flex-grow items-center sm:text-center">
            <span
              onClick={() => {
                dateElement.current.showPicker();
              }}
              tabIndex={0}
              className="mr-5 flex"
            >
              <CalendarIcon className="w-5 h-5 inline" />
            </span>
            <input
              tabIndex={-1}
              type="date"
              defaultValue={isoDateStr}
              ref={dateElement}
              className="w-0 h-0"
              onChange={(e) => {
                const date = e.currentTarget.value + " 00:00";
                const startTime = joinDateAndTime(
                  date,
                  shortTime(inputs.start, false)
                );
                const endTime = joinDateAndTime(
                  date,
                  shortTime(inputs.end, false)
                );
                updateThisEntry({
                  start: getSqlDatetime(startTime),
                  end: getSqlDatetime(endTime),
                });
              }}
            />
            <input
              defaultValue={shortTime(inputs.start)}
              className="entry-item--input text-base w-20 text-center"
              onBlur={(e) => {
                const val = e.currentTarget.value;
                const time = formatTime(val);
                if (val == startStr) return;
                if (!time) {
                  e.currentTarget.value = startStr;
                  return;
                }
                const startTime = new Date(
                  new Date(inputs.start).toDateString() + " " + time
                );
                updateThisEntry({ start: getSqlDatetime(startTime) });
              }}
            />
            <span className="p-1"> - </span>
            <input
              defaultValue={shortTime(inputs.end)}
              className="entry-item--input w-20 text-center"
              onBlur={(e) => {
                const val = e.currentTarget.value;
                const time = formatTime(val);
                if (val == endStr) return;
                if (!time) {
                  e.currentTarget.value = endStr;
                  return;
                }
                const endTime = new Date(
                  new Date(inputs.start).toDateString() + " " + time
                );
                updateThisEntry({ end: getSqlDatetime(endTime) });
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end w-52">
        <div className="flex justify-between w-full">
        <div className="inline text-lg">{hoursStr}</div>
        <div>
          <TrashIcon
            className="hover:cursor-pointer w-7 h-7 lg:w-8 lg:h-8"
            onClick={() => {
              updateThisEntry({}, true);
            }}
          />
        </div>
        </div>
        <select
          defaultValue={inputs.parentProject}
          className="bg-transparent text-right"
          onChange={(e) => {
            const val = e.currentTarget.value;
            updateThisEntry({ parentProject: val });
          }}
        >
          {projects.map((project, i) => {
            return (
              <option key={i} value={project} className="text-black">
                {project}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default EntryItem;
