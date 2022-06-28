import React from 'react';
import users from "../../Assets/images/man-png.png";
import "./ProjectsCard.css"

const ProjectsCard = ({project, changeCards}) => {

    const formDta = (data) => {
        return data.split('-').reverse().join('.')
    }

    return (
        <div className={changeCards ? "projectCard" : "projectCardList" }>
            <img className={changeCards? "projectCardMainImg" : "projectCardMainImgList"} src={project.img} alt="#"/>
            <div className={changeCards ? "projectInfo" : "projectInfoList"}>
                <h2 className="projectInfoTitle">{project.title}</h2>
                <h3><i className='bx bx-calendar-alt'/>{formDta(project.dataStart)} - {formDta(project.dataEnd)}</h3>
                <h3><i className='bx bx-user'/>{project.admin}</h3>
                <h3><i className='bx bx-ruble'/>{project.manager}</h3>
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
    );
};

export default ProjectsCard;