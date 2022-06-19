import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import Tasks from "./Pages/Tasks";
import Calendar from "./Pages/Calendar";
import Capabilities from "./Pages/Сapabilities";
import Projects from "./Pages/Projects";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/tasks" element={<Tasks/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/calendar" element={<Calendar/>}/>
                <Route path="/capabilities" element={<Capabilities/>}/>
                {/*<Route path="*" element={<NotFound/>}/>*/}
            </Routes>
        </BrowserRouter>
    );

}

export default App;
