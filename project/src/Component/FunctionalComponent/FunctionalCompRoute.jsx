
import { useRoutes } from "react-router-dom";
import FunctionalCompMenu from "./FunctionalCompMenu";
import FunctionalcompinReact from "./01FunctionalCompInReact";
import StateFunctionalCompInreact from "./02StateFunctionalCompInReact";


const FunctionalCompRoute = () => {
    const route = useRoutes([
        {
            path: "/",
            element:<FunctionalCompMenu/>,
            children:[
                {
                    path:"whatisfunctionalcomponent",
                    element:<FunctionalcompinReact/>

                },
                {
                    path:"stateinfunccomp",
                    element:<StateFunctionalCompInreact/>
                }
            ]
        },

    ])
    return route;
};
export default FunctionalCompRoute;