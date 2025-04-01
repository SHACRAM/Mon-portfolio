import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";



export const Contact = () => {
    return (
        <div className="bg-[#181826] min-h-screen p-6">
            <Header/>
            <h2 className="text-white text-2xl mb-5 mt-5">Une question ?</h2>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-white">Votre Email</label>
                    <input className="bg-[#b09ebd] rounded-md pl-2 pt-1 pb-1" type="email" required id="email" name="email" placeholder="jhonDoe@gmail.com" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="subject" className="text-white">Sujet du mail</label>
                    <input className="bg-[#b09ebd] rounded-md pl-2 pt-1 pb-1" type="text" required id="subject" name="subject" placeholder="Sujet"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="content" className="text-white">Votre message</label>
                    <textarea className="bg-[#b09ebd] rounded-md pl-2 pt-1 pb-1 h-30" name="content" id="content" placeholder="Contenu du mail" required></textarea>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="relative p-2 rounded-md w-30 mt-8 text-black overflow-hidden group bg-[#b09ebd] hover:text-white transition-colors duration-400">
                    <span className="absolute  inset-0 bg-gradient-to-r from-[#9739DE] to-[#9739DE] w-0 group-hover:w-full transition-all duration-400 ease-in-out"></span>
                    <span className="relative z-10 ">Envoyer</span>
                </button>
            </div>
        </div>
    )
}