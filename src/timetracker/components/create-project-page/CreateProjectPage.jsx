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
    
    <div className="create-project h-screen flex flex-col items-center">
      {(open)?
    <CreateProjectDialog open={open} setOpen={setOpen}/>:''}
      <div className="mt-36">
        <h1 className="font-bold text-light text-[48px]">Projects</h1>
      </div>
      <div className="Button">
        <button className="bg-secondary text-light py-2 px-4 rounded-md font-semibold font-[16px] m-8 shadow-md " onClick={clickHandler} >
          Create New Project
        </button>
    
      </div>
      <div className="w-screen flex justify-center">
        <table className="table-auto mx-3 mb-5 text-light rounded-[4px]  bg-[#454545] overflow-hidden md:min-w-[600px] lg:min-w-[900px]">
        
          <thead className=" ">
            <tr className="">
              <th className="text-center border-t border-[#5B5B5B]  px-5 py-1 md:py-2 font-semibold lg:w-[450px]">Name</th>
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
  );
};

export default CreateProjectPage;
