import React from 'react';
import users from "../../Assets/images/man-png.png";

const ProjectsCard = (student) => {
    return (
        <div className="projectCard" key={student.id}>
            <img className="projectCardMainImg" src={student.img} alt="#"/>
            <div className="projectInfo">
                <h2 className="projectInfoTitle">{student.title}</h2>
                <h3>{student.data}</h3>
                <h3>{student.admin}</h3>
                <h3>{student.manager}</h3>
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