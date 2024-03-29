import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
const FunctionalCompMenu=()=>{
    return(
        <>
        <div className="row">
            <div className="col-6 offset-6">
            <ol>
                <li><Link to="whatisfunctionalcomponent"> What is Functional Component </Link></li>
                <li><Link to="stateinfunccomp"> State </Link></li>
                <li><Link to="propsinfunccomp"> Props </Link></li>
                <li><Link to="jsxinfunccomp"> JSX </Link></li>
                <li><Link to="controlledcomponent"> Controlled Component </Link></li>
                <li><Link to="controlledcomponentmultipledata"> Multiple Input in single State Component </Link></li>
                <li><Link to="restandspread"> Rest Vs Spread </Link></li>
                <li><Link to="hooksinfunctionalcompo"> Hooks </Link></li>
                <li><Link to="useeffectinfunctionalcompo"> useEffect </Link></li>
                <li><Link to="uselayouteffectinfunctionalcompo"> useLayoutEffect </Link></li>
                <li><Link to="usereffectinfunctionalcompo"> useRef </Link></li>
                <li><Link to="usecallbackinfunctionalcompo"> useCallback </Link></li>
                <li><Link to="usememoinfunctionalcompo"> useMemo </Link></li>
                <li><Link to="useimperativehandlecomponent"> useimperative </Link></li>
               
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