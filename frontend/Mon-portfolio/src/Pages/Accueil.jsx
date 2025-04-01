import React from "react";
import { Header } from "../Components/Header";
import { StackTechnic } from "../Components/StackTechnic";
import { MyProjects } from "../Components/MyProjects";
import { Presentation } from "../Components/Presentation";
import { ProjectDetail } from "../Components/ProjectDetail";
import { Footer } from "../Components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

export const Accueil = ()=>{
    const [projectData, setProjectData] = useState([]);
    const [message, setMessage] = useState("");
    const [projectInfo, setProjectInfo] = useState([]);
    const [displayProjectDetail, setDisplayProjectDetail] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const getData = async ()=>{
        try{

            const response = await axios.get("/public/data/projectData.json");
            if(response){
                setProjectData(response.data);
                setMessage("Données récupérées avec succès");
            }
            
        }catch(error){
            setMessage("Erreur lors de la récupération des données");
        }
    }

    useEffect(()=>{
        getData();
    },[]);


    return (
        <div className="flex flex-col flex-grow bg-[#181826] min-h-screen pt-6 pl-6 pr-6">
            <Header/>
            <StackTechnic/>
            <div className="flex flex-col items-center mb-5 sm:flex-row sm:items-center sm:mt-10 sm:gap-10 sm:mb-10">
                <h1 className="text-white text-center mt-8 mb-5 text-2xl sm:text-left sm:mt-0 sm:mb-0">Bienvenu sur mon portfolio !</h1>
                <a className="text-white bg-[#4945FF] p-2  w-50 justify-center rounded-xl flex transition-transform duration-200 hover:scale-102" href="/public/cv/CV Sébastien Lotten.pdf" download >Télécharger mon Cv</a>

            </div>
            <div>
                <Presentation/>  
            </div>
            <div className="mt-10 pb-10 flex flex-col flex-grow">
                <h2 className="text-white text-xl mb-8 text-center">Mes projets</h2>
                {! displayProjectDetail && (
                    <MyProjects projectData={projectData} setProjectInfo={setProjectInfo} setDisplayProjectDetail={setDisplayProjectDetail}/>
                )}
                
                {displayProjectDetail && (
                    <ProjectDetail projectInfo={projectInfo} setDisplayProjectDetail={setDisplayProjectDetail} />
                )}
                
            </div>
                <Footer/>
            
            
        </div>
    )
}