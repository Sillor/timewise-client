/* eslint-disable react/prop-types */
import { useState } from "react"

const CreateProjectDialog = (props) => {
    const{open,setOpen} = props
 
    let [errormsg,setErrormsg] = useState()
    let [projectname,setProjectName]=useState({projectName:''})
    let clickHandler=()=>{
        (open)?setOpen(false):setOpen(true)
       }
    let changeHandler=(e)=>{
      setProjectName({[e.target.name]:e.target.value})
    }
    let submitHandler= async (e)=>{
      e.preventDefault()
     
      
      const response = await fetch("http://localhost:3002/createProject", {
      method: "PUT",
      body: JSON.stringify(projectname),
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${document.cookie}`
      })
    })
      let data = await response.json()
      let messageData = data.message
      setErrormsg (messageData)
      if(!messageData){
        setOpen(false)
        location.reload(true)
      }
    }
    
    return ( 
        <div className="fixed left-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center ">
        <div className="dialog rounded-md shadow-md p-8 flex">
            <div className="mx-5">
              <h1 className="text-light text-center text-[20px] font-bold lg:text-[32px] mb-5">Create New Project</h1>
              <div >
              <input id="projectname" type="text" name='projectName' placeholder="Project Name" className="text-black rounded-md p-3 outline-none w-full" onChange={(e)=>changeHandler(e)}></input>
              </div>
             {
              (errormsg)?
              <div>
              <p className="text-red-600">{errormsg}</p>
            </div>
            :
            ''
             }
              <div className="flex justify-between mt-10">
              <button className="bg-[#303036] text-light py-2 px-2 md:px-4 rounded-md font-semibold shadow-md"  onClick={clickHandler}>
          Cancel
        </button>
        <button className="bg-secondary text-light px-2 py-2 md:px-4 rounded-md font-semibold  shadow-md" onClick={submitHandler}>
          Create Project
        </button>
        </div>
            </div>

        </div>
      </div>
     );
}
 
export default CreateProjectDialog;