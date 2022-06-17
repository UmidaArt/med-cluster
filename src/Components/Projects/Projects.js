import React, {useEffect, useState} from 'react';
import Navigation from "../Navigation/Navigation";
import './Projects.css'
import img from '../../assets/images/man-png.png'
import axios from "axios";
import Modal from "../Modal";
import 'boxicons'

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
        <div className="projects">
            {
                openModal &&
                <Modal setOpenModal = {setOpenModal}
                              projects = {projects}
                              setProjects = {setProjects}
                />
            }
            <Navigation/>
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
                                        <h3>{student.data}</h3>
                                        <h3>{student.admin}</h3>
                                        <h3>{student.manager}</h3>
                                        <div className="personList">
                                            <div className="person">
                                                <img src={img} className='imgPerson' alt="#"/>
                                            </div>
                                            <div className="person">
                                                <img src={img} className='imgPerson' alt="#"/>
                                            </div>
                                            <div className="person">
                                                <img src={img} className='imgPerson' alt="#"/>
                                            </div>
                                            <div className="person">
                                                <img src={img} className='imgPerson' alt="#"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="changeDisplay">
                        <div className="icon"><box-icon name='qr'></box-icon></div>
                        <div className="icon"><box-icon name='list-ul'></box-icon></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;