import React, { useState } from 'react';
import "./MainContent.css"

function MainContent() {
    const [inputs, setInputs] = useState({
        Summary: '',
        Project: '',
        TimeStart: '',
        TimeEnd: '',
        Date: ''
    });
    const [submittedData, setSubmittedData] = useState([]);

    const handleInputChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData([...submittedData, inputs]);
        setInputs({ Summary: '', Project: '', TimeStart: '', TimeEnd: '', Date: '' });
    }

    return (
        <div className="appContainer w-screen">
            <h1 className=" text-white text-5xl font-bold text-center my-3 mb-5">Time Tracker</h1>
        <div className ="TrackerContainer rounded-xl h-3/12 w-3/6  mx-auto p-10">
            
            <h2 className="text-3xl font-bold mb-4">New Entry</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex justify-between">
                    <div className="Summary w-9/12">
                        <input 
                            className="w-full p-2 rounded-lg"
                            name="Summary" 
                            value={inputs.Summary} 
                            onChange={handleInputChange} 
                            placeholder='Summary'
                        />
                    </div>
                    <div className="Project w-1/5">
                        <input 
                            className="w-full p-2 rounded-lg"
                            name="Project" 
                            value={inputs.Project} 
                            onChange={handleInputChange} 
                            placeholder='Project'
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
    <div className="ml-auto w-1/5">
        <input 
            type="date"
            className="w-full p-2 rounded-lg"
            name="Date" 
            value={inputs.Date} 
            onChange={handleInputChange}
            placeholder='Today'
        />
    </div>
</div>
                <div className="w-full flex justify-center">
                    <button type="submit" className="py-2 px-4 w-2/5 bg-yellow-500 text-white rounded-lg">Submit</button>
</div>
</form>
<div>
{submittedData.map((data, index) => (
<div key={index}>
<p>Summary: {data.Summary}</p>
<p>Project: {data.Project}</p>
<p>Time Start: {data.TimeStart}</p>
<p>Time End: {data.TimeEnd}</p>
<p>Date: {data.Date}</p>
</div>
))}
</div>
</div>
</div>
);
}

export default MainContent;