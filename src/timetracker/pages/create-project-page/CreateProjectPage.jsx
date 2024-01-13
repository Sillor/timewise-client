import { useState } from "react";
import "./CreateProjectPage.css";
import CreateProjectDialog from "./CreateProjectDialog";

const CreateProjectPage = () => {
  let projects = [
    {id:1,name:"project1",hours:'2.00h'},
    {id:2,name:"project2",hours:'55.56h'},
    {id:3,name:"project3",hours:'23.00h'}
  ]
 let [open,setOpen] = useState(false)
 let clickHandler=()=>{
  (open)?setOpen(false):setOpen(true)
 }
  return (
    
    <div className="h-screen flex flex-col items-center">
      {(open)?
    <CreateProjectDialog open={open} setOpen={setOpen}/>:''}
      <div className="mt-28">
        <h1 className="font-bold text-light text-[48px] lg:text-[68px]">Projects</h1>
      </div>
      <div className="flex flex-col items-center md:w-3/4 md:flex-none md:items-start">
      
        <button className="md:ms-3 bg-secondary text-light py-2 px-4 rounded-md font-semibold md:text-[24px] m-8 shadow-md " onClick={clickHandler} >
          Create New Project
        </button>
    
   
      <div className="md:w-full">
        <table className="table-auto md:w-full md:text-[20px] mx-3 mb-5 text-light rounded-[4px]  bg-[#454545] overflow-hidden">
        
          <thead className=" ">
            <tr className="">
              <th className="text-center border-t border-[#5B5B5B]  px-5 py-1 md:py-2 font-semibold md:w-1/3">Name</th>
              <th className="text-center border-t border-[#5B5B5B]  px-5 py-1 md:py-2 font-semibold ">Total Hours Tracked</th>
            </tr>
          </thead>
          <tbody className="text-center">
          {
            projects.map((item)=>
              <tr key={item.id} className="border-t border-[#5B5B5B] bg-[#303036]">
                <td className="px-5 py-3">{item.name}</td>
                <td className="px-5 py-3">{item.hours}</td>
              </tr>
            )
          }
         
           </tbody>
       
        </table>
      </div>
      </div>
    </div>
  );
};

export default CreateProjectPage;
