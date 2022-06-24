import React from 'react';
import avatar from "../../Assets/images/ava.png";

const Header = () => {
    return (
        <div className="p-4 bg-gray-300">
            <img src={avatar} alt="user" className="h-8 block ml-auto img"/>
        </div>
    );
};

export default Header;