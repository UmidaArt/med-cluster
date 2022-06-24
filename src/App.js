import React, {useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Tasks from "./Pages/Tasks";
import Calendar from "./Pages/Calendar";
import Capabilities from "./Pages/Сapabilities";
import Projects from "./Pages/Projects";
import Login from "./Pages/Login";

const App = () => {

    let location = useLocation()
    let navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/login')
        }
    }, [location.pathname])

    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/tasks" element={<Tasks/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/calendar" element={<Calendar/>}/>
            <Route path="/capabilities" element={<Capabilities/>}/>
        </Routes>
    );
}

export default App;
