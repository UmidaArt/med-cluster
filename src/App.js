import React from 'react';
import logo from "./assets/images/logo.png"
import avatar from "./assets/images/man.png"
import {NavLink} from "react-router-dom";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import Tasks from "./Pages/Tasks";
import Calendar from "./Pages/Calendar";
import Capabilities from "./Pages/Сapabilities";
import Projects from "./Pages/Projects";
import MainPage from "./Components/MainPage";

const App = () => {

    return (
            <div className="flex projects">
                <div className="navigation">
                    <aside>
                        <img src={logo} alt="logo" className="w-40 block mx-auto"/>
                        <nav className="navBar">
                            <NavLink to="/tasks" className="block pl-2 py-3 hover:bg-[#2f0e63]"><i className='bx bx-qr mr-2'></i>Задачи и работы</NavLink>
                            <NavLink to="/projects" className="block pl-2 py-3 hover:bg-[#2f0e63]"><i className='bx bx-qr mr-2'></i>Проекты</NavLink>
                            <NavLink to="/calendar" className="block pl-2 py-3 hover:bg-[#2f0e63]"><i className='bx bx-qr mr-2'></i>Календарь</NavLink>
                            <NavLink to="/capabilities" className="block pl-2 py-3 hover:bg-[#2f0e63]"><i className='bx bx-qr mr-2'></i>Возможности</NavLink>
                        </nav>
                    </aside>
                </div>
                <div className="main-page">
                    <div className="p-4 bg-gray-300">
                        <img src={avatar} alt="user" className="h-8 rounded block ml-auto"/>
                    </div>
                    <div className="p-4">
                        <Routes>
                            <Route path="/tasks" element={<Tasks/>}/>
                            <Route path="/projects" element={<Projects/>}/>
                            <Route path="/calendar" element={<Calendar/>}/>
                            <Route path="/capabilities" element={<Capabilities/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
    );

}

export default App;
