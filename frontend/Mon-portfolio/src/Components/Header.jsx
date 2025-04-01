import React from "react";
import { NavLink } from "react-router";


export const Header = () => {

    return(
        <div className="bg-[#181826] flex justify-between items-center">
            <NavLink to="/"><img className="h-15" src="/public/images/logo V3.png" alt="Logo Sébastien Lotten" /></NavLink>
            <NavLink to="/Contact" className="text-white bg-[#4945FF] p-3  w-40 justify-center rounded-xl flex transition-transform duration-200 hover:scale-102">Me contacter</NavLink>
        </div>
    )
}