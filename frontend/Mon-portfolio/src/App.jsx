import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router"
import './App.css'
import { Accueil } from './Pages/Accueil'
import { Contact } from './Pages/Contact'



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Accueil/>
    },{
      path: '/Contact',
      element: <Contact/>
    }

  ])

  return <RouterProvider router={router}/>

}

export default App
