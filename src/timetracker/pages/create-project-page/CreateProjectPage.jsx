import { useEffect, useState } from "react";
import "./CreateProjectPage.css";
import CreateProjectDialog from "./CreateProjectDialog";
import Button from "../../components/button-component/Button";
import { getProjects } from "../../utils/dbHandler";

const CreateProjectPage = () => {

  const [open, setOpen] = useState(false);
  const [projectList, setProjectList] = useState();
  const clickHandler = () => {
    open ? setOpen(false) : setOpen(true);
  };
  async function updateProjects() {
    const projectData = await getProjects();
    setProjectList(projectData.data);
  }
  useEffect(() => {
    updateProjects();
  }, []);
  return (
    <div className="flex flex-col items-center">
      {open && (
        <CreateProjectDialog
          open={open}
          setOpen={setOpen}
          handleClose={clickHandler}
          updateProjects={updateProjects}
        />
      )}
      <div className="mt-28">
        <h1 className="font-bold text-light text-[48px] lg:text-[68px]">
          Projects
        </h1>
      </div>
      <div className="flex flex-col items-center md:w-3/4 md:flex-none md:items-start">
        <Button className="md:ms-3 py-2 px-4 font-semibold m-8 shadow-md" onClick={clickHandler}>Create New Project</Button>
    
   
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
           (projectList) && projectList.map((item,index)=>
              <tr key={index} className="border-t border-[#5B5B5B] bg-[#303036]">
                <td className="px-5 py-3">{item.projectName}</td>
                <td className="px-5 py-3">{item.totalTime.substring(0,item.totalTime.length-4).concat(':',(item.totalTime.substring(item.totalTime.length-4,item.totalTime.length-2)).concat(':',item.totalTime.substring(item.totalTime.length-2,item.totalTime.length)))}</td>
              </tr>
           )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectPage;
