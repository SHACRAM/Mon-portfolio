import React from "react";


export const MyProjects = ({projectData, setProjectInfo,setDisplayProjectDetail}) => {

    const handleClick = (project) => {
        setProjectInfo(project)
        setDisplayProjectDetail(true)
    }




    return(
        <div className="relative flex flex-wrap justify-center gap-8">
            {projectData.map((project, index)=>{
                return(
                    <button onClick={()=>{handleClick(project)}} key={index} className="h-30 w-30 p-2 text-white border-2 border-[#9739DE] duration-200 rounded-2xl flex justify-center items-center hover:shadow-2xl hover:shadow-[#9739DE] hover:scale-110  ">
                        {project.title}
                    </button> 
                )
            })}
        </div>
    )
}