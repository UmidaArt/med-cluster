import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css'

const Navigation = () => {

    const isActive = ({isActive}) => isActive ? 'active-link' : ''
    return (
        <div className="navigation">
            <NavLink to="/tasks" className={isActive}><box-icon name='qr' color="#fff"></box-icon>Задачи и работы</NavLink>
            <NavLink to="/projects" className={isActive}><box-icon name='qr' color="#fff"></box-icon>Проекты</NavLink>
            <NavLink to="/calendar" className={isActive}><box-icon name='qr' color="#fff"></box-icon>Календарь</NavLink>
            <NavLink to="/capabilities" className={isActive}><box-icon name='qr' color="#fff"></box-icon>Возможности</NavLink>
        </div>
    );
};

export default Navigation;