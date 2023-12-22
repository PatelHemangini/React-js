
import { useRoutes } from "react-router-dom";
import FunctionalCompMenu from "./FunctionalCompMenu";
import FunctionalcompinReact from "./01FunctionalCompInReact";
import StateFunctionalCompInReact from "./02StateFunctionalCompInReact";
import Proscomponent from "./03PropsFunctionalComInReact"


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
                    element:< Proscomponent/>,
                },
            ]
        },

    ])
    return route;
};
export default FunctionalCompRoute;