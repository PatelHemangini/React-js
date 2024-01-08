
import { useRoutes } from "react-router-dom";
import FunctionalCompMenu from "./FunctionalCompMenu";
import FunctionalcompinReact from "./01FunctionalCompInReact";
import StateFunctionalCompInReact from "./02StateFunctionalCompInReact";
import PropsFunctionalComInReact from "./03PropsFunctionalComInReact";
import JSXFunctionalComponentInReact from './05JSXFunctionalComponentInReact.jsx';
import ControlledComponentInReact from './06ControlledComponentInReact.jsx';
import MultipleDataComponentInReact from './07MultipleDataComponentInReact.jsx';
import RestVsSpreadComponentInReact from './08RestVsSpreadComponentInReact.jsx';
import HooksInFunctionalCompo from './09HooksInFunctionalCompo.jsx';
import UseEffectHooksInFunctionalCompo from './10UseEffectHooksInFunctionalCompo.jsx';
import UseLayoutEffectHooksInFunctionalCompo from './11UseLayoutEffectHooksInFunctionalCompo.jsx';
import UseRefEffectHooksInFunctionalCompo from './12UseRefEffectHooksInFunctionalCompo.jsx';
import UseCallbackHooksInFunctionalCompo from './13UseCallbackHooksInFunctionalCompo.jsx';
import UseMemoHooksInFunctionalCompo from './14UseMemoHooksInFunctionalCompo.jsx';


const FunctionalCompRoute = () => {
    const route = useRoutes([
        {
            path: "/",
            element:<FunctionalCompMenu/>,
            children:[
                {
                    path:"whatisfunctionalcomponent",
                    element:<FunctionalcompinReact/>,

                },
                {
                    path:"stateinfunccomp",
                    element:< StateFunctionalCompInReact/>,
                },
                {
                    path:"propsinfunccomp",
                    element:< PropsFunctionalComInReact/>,
                }, {
                    path: "jsxinfunccomp",
                    element: <JSXFunctionalComponentInReact />,
                }, {
                    path: "controlledcomponent",
                    element: <ControlledComponentInReact />,
                }, {
                    path: "controlledcomponentmultipledata",
                    element: <MultipleDataComponentInReact />,
                }, {
                    path: "restandspread",
                    element: <RestVsSpreadComponentInReact />,
                }, {
                    path: "hooksinfunctionalcompo",
                    element: <HooksInFunctionalCompo />,
                }, {
                    path: "useeffectinfunctionalcompo",
                    element: <UseEffectHooksInFunctionalCompo />,
                }, {
                    path: "uselayouteffectinfunctionalcompo",
                    element: <UseLayoutEffectHooksInFunctionalCompo />,
                }, {
                    path: "usereffectinfunctionalcompo",
                    element: <UseRefEffectHooksInFunctionalCompo />,
                }, {
                    path: "usecallbackinfunctionalcompo",
                    element: <UseCallbackHooksInFunctionalCompo />,
                }, {
                    path: "usememoinfunctionalcompo",
                    element: <UseMemoHooksInFunctionalCompo />,
                },
            ]
        },

    ])
    return route;
};
export default FunctionalCompRoute;