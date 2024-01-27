/* eslint-disable react/prop-types */
//create function that pushes or removes data from array
//create function that when you click on the time, then you
//can change it, if time is not inputted, then do not change

//overflow scroll or pagination -> set max height?
import { useRef, useState } from "react";
import {
  shortDate,
  shortTime,
  timeDifference,
} from "../../utils/dateFormatter";
import TrashIcon from "../../assets/TrashIcon";
import "./EntryItem.css";
import CalendarIcon from "../../assets/CalendarIcon";

const EntryItem = ({ props, deleteFn }) => {
  // const {summary, parentProject, start, end, id } = props
  const [inputs, setInputs] = useState(props);
  const dateElement = useRef(null);
  const dateStr = shortDate(inputs.start, true);
  const startStr = shortTime(inputs.start);
  const endStr = shortTime(inputs.end);
  const hoursStr = timeDifference(inputs.start, inputs.end);

  return (
    <div className="entry-item w-full flex justify-between max-w-[95%] md:w-full mx-auto my-3 bg-darkBlue rounded-md group p-4">
      <div className="w-full">
        <div className="flex items-center">
          <input
            className="entry-item--input inline text-xl font-bold w-32"
            value={dateStr}
          />
          <div className="inline flex-grow text-right text-lg">{hoursStr}</div>
        </div>
        <div>
          <input
            className="entry-item--input inline w-full sm:w-40"
            defaultValue={inputs.summary}
            placeholder="Add summary"
            onBlur={(e) => {
              const val = e.currentTarget.value;
              if (inputs.summary == val) return;
              setInputs((prev) => ({ ...prev, summary: val }));
            }}
          />
          <div className="sm:inline flex flex-grow items-center sm:text-center sm:ml-10">
            <input
              defaultValue="26:26PM"
              className="entry-item--input text-base w-20 text-center"
            />
            <span className="p-1"> - </span>
            <input
              defaultValue="1:11PM"
              className="entry-item--input w-20 text-center "
            />
            <span onClick={() => {dateElement.current.showPicker()}} tabIndex={0}>
              <CalendarIcon className="w-5 h-5 inline mx-5"/>
            </span>
            <input
              type="date"
              id="dater"
              ref={dateElement}
              className="w-0 h-0"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end w-28">
        <div>
          <TrashIcon
            className="hover:cursor-pointer w-7 h-7 lg:w-8 lg:h-8"
            onClick={() => {
              deleteFn(inputs.id);
            }}
          />
        </div>
        <div className="">project</div>
      </div>
    </div>
  );
  return (
    <table className="w-full max-w-[95%] md:w-full mx-auto my-3 bg-darkBlue rounded-md group">
      <tbody>
        <tr>
          <td className="px-3 pt-3">
            <h2 className="text-2xl font-bold">{dateStr}</h2>
          </td>
          <td align="right" className="p-3  ">
            <span className=" sm:w-[1.2rem] sm:h-[1.2rem]">
              <TrashIcon
                className="hover:cursor-pointer w-7 h-7 lg:w-8 lg:h-8"
                onClick={() => deleteFn(inputs.id)}
              />
            </span>
          </td>
        </tr>
        <tr>
          <td className="px-3 text-xl font-medium">
            <input
              value={startStr}
              className="bg-transparent outline-1 outline-black group-hover:outline inline-block w-min"
            />
            <div className="inline-block">-</div>
            <input
              value={endStr}
              className="inline-block bg-transparent outline-1 group-hover:outline"
            />
          </td>
        </tr>
        <tr>
          <td className="px-3 max-w-4 h-min text-xl font-medium">
            <span>{inputs.summary}</span>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="right" className="px-3 pb-1 font-medium">
            {inputs.parentProject}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default EntryItem;
