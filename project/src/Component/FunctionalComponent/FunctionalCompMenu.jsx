import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
const FunctionalCompMenu=()=>{
    return(
        <>
        <div className="row">
            <div className="col-6 offset-6">
            <ol>
                <li><Link to="whatisfunctionalcomponent"> What is Functional Component </Link></li>
                {/* <li><Link to="stateinfunccomp"> State </Link></li> */}
                {/* <li><Link to="propsinfunccomp"> Props </Link></li> */}
            </ol>
            </div>
        </div>

            <div className="row">
                <div className="col">
                    <Outlet />
                </div>
            </div>
        </>
    );
};
export default FunctionalCompMenu;