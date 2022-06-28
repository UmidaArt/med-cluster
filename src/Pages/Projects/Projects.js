import React, {useEffect, useState} from 'react';
import './Projects.css'
import axios from "axios";
import Modal from "../../Components/Modal";
import LayOut from "../../Components/LayOut";
import ChangePositionCards from "../../Components/ChangePositionCards";
import ProjectsCard from "../../Components/ProjectsCard";

const Projects = () => {

    const [projects, setProjects] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [changeCards, setChangeCards] =useState(true)

    useEffect(() => {
        axios.get('https://62b95a18ff109cd1dc900844.mockapi.io/projects')
            .then((res) => {
                setProjects(res.data)
            })
    },[])

    const positionCardsFlex = () => {
        setChangeCards(true)
    }

    const positionCardsList = () => {
        setChangeCards(false)
    }

    return (
        <div className="med-projects">
            {
                openModal &&
                <Modal setOpenModal = {setOpenModal}
                       projects = {projects}
                       setProjects = {setProjects}
                />
            }
            <LayOut>
                <div className="infoPage">
                    <h1 className="title">Проекты</h1>
                    <div className="btnBox">
                        <h2>Список проектов</h2>
                        <button className="btnAdd" onClick={() => setOpenModal(true)}>Добавить проект</button>
                    </div>
                    <div className="projectMain">
                        <div className={changeCards ? "projectBlock" : "projectList"}>
                            {
                                projects.map((project) => (
                                    <ProjectsCard project={project}
                                                  key={project.id}
                                                  changeCards={changeCards}
                                    />
                                ))
                            }
                        </div>
                        <ChangePositionCards  positionCardsFlex={positionCardsFlex}
                                              positionCardsList={positionCardsList}
                        />
                    </div>
                </div>
            </LayOut>
        </div>
    );
};

export default Projects;