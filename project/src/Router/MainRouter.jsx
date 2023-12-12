import { createBrowserRouter } from 'react-router-dom';
import Header from '../Component/Common/Header';
import HomeCompo from '../Pages/HomeCompo';
import Aboutus from '../Pages/Aboutus';
import ContactComp from '../Pages/ContactComp';
import ExampleComp from '../Pages/ExampleComp';
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

    },
])
export default router;