import React, {useEffect, useState} from 'react';
import './Projects.css'
import users from '../../Assets/images/man-png.png'
import axios from "axios";
import Modal from "../../Components/Modal";
import LayOut from "../../Components/LayOut";
import ChangePositionCards from "../../Components/ChangePositionCards";

const Projects = () => {

    const [projects, setProjects] = useState([])
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        axios.get('https://62abbf75bd0e5d29af14c5a7.mockapi.io/projects')
            .then((res) => {
                setProjects(res.data)
            })
    },[])

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
                        <div className="projectBlock">
                            {
                                projects.map((student) => (
                                    <div className="projectCard" key={student.id}>
                                        <img className="projectCardMainImg" src={student.img} alt="#"/>
                                        <div className="projectInfo">
                                            <h2 className="projectInfoTitle">{student.title}</h2>
                                            <h3><i className='bx bx-calendar-alt'/>{student.data}</h3>
                                            <h3><i className='bx bx-user'/>{student.admin}</h3>
                                            <h3><i className='bx bx-ruble'/>{student.manager}</h3>
                                            <div className="personList">
                                                <div className="person">
                                                    <img src={users} className='imgPerson' alt="#"/>
                                                </div>
                                                <div className="person">
                                                    <img src={users} className='imgPerson' alt="#"/>
                                                </div>
                                                <div className="person">
                                                    <img src={users} className='imgPerson' alt="#"/>
                                                </div>
                                                <div className="person">
                                                    <img src={users} className='imgPerson' alt="#"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <ChangePositionCards/>
                    </div>
                </div>
            </LayOut>
        </div>
    );
};

export default Projects;