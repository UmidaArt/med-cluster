import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Login from "./Components/Login";
import MainPage from "./Components/MainPage";
import Tasks from "./Components/Tasks";
import Calendar from "./Components/Calendar";
import Capabilities from "./Components/Сapabilities";
import Projects from "./Components/Projects";

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
