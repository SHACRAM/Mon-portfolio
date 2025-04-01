import React from "react";


export const ProjectDetail = ({projectInfo, setDisplayProjectDetail}) => {

    const handleClick = () => {
        setDisplayProjectDetail(false);
    }
   


    return(
        <div className="bg-[#2B2140] p-3 rounded-2xl flex  flex-col">
            <div className="flex justify-end">
                <button onClick={handleClick} className="h-8 w-8 cursor-pointer"><img src="/src/assets/croix.png" alt="Croix pour fermer les informations" /></button>
            </div> 
            <h2 className="text-white text-2xl mb-5">{projectInfo.title}</h2>
            <div className="flex flex-wrap justify-center gap-5">
                {projectInfo.technos.map((techno, index)=>{
                    return(
                        <img key={index} src={techno.lien} alt={techno.name} className="h-15 w-15 rounded-4xl border-3 border-white hover:scale-110 duration-300 " />
                    )
                }
                )}
            </div>
            <p className="text-white mt-5">{projectInfo.description}</p>
            <div className="mt-5 text-lg">
                <p className="text-white">Voir le projet</p>
                <a href={projectInfo.lienUtile} className="text-[#9739DE]" target="blank">{projectInfo.lienUtile}</a>
            </div>
            
        
        </div>
    )
}