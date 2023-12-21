import { createBrowserRouter } from 'react-router-dom';
import Header from '../Component/Common/Header';
import HomeCompo from '../Pages/HomeCompo';
import Aboutus from '../Pages/Aboutus';
import ContactComp from '../Pages/ContactComp';
import ExampleComp from '../Pages/ExampleComp';
import FunctionalComp from '../Component/FunctionalComponent/FunctionalCompRoute';
import ClassComp from '../Component/ClassComponent/Class';
const router=createBrowserRouter([
    {
        path:"/",
        element:(<HomeCompo/>),
    },
    {
        path:"/About",
        element:(<><Header/> <Aboutus/></>),
    },
    {
        path:"/Contact",
        element:(<><Header/><ContactComp/></>), 

    },
    {
        path:"/example",
        element:(<><Header/><ExampleComp/></>),
        children:[
            {
                path:"/example/classcomponent/*",
                element:<ClassComp/>,
            },
            {
                path:"/example/functionalcomponent/*",
                element:<FunctionalComp/>,
            },
            
        ]

    },
])
export default router;