import React from 'react';
import logo from "../../Assets/images/logo.png";
import {NavLink} from "react-router-dom";

const SideBar = () => {
    return (
        <div className="navigation">
            <aside>
                <img src={logo} alt="logo" className="w-40 block mx-auto"/>
                <nav className="navBar">
                    <NavLink to="/tasks" className="block pl-2 py-3 hover:bg-[#2f0e63]"><i className='bx bx-qr mr-2'/>Задачи и работы</NavLink>
                    <NavLink to="/projects" className="block pl-2 py-3 hover:bg-[#2f0e63]"><i className='bx bx-qr mr-2'/>Проекты</NavLink>
                    <NavLink to="/calendar" className="block pl-2 py-3 hover:bg-[#2f0e63]"><i className='bx bx-qr mr-2'/>Календарь</NavLink>
                    <NavLink to="/capabilities" className="block pl-2 py-3 hover:bg-[#2f0e63]"><i className='bx bx-qr mr-2'/>Возможности</NavLink>
                </nav>
            </aside>
        </div>
    );
};

export default SideBar;