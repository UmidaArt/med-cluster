import React from 'react';
import SideBar from "../SideBar";
import Header from "../Header";

const LayOut = ({children}) => {
    return (
        <div className="flex min-h-screen">
            <SideBar/>
            <div className="main-page">
                <Header/>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LayOut;