import { createBrowserRouter } from 'react-router-dom';
import Header from '../Component/Common/Header';
import HomeCompo from '../Pages/HomeCompo';
import Aboutus from '../Pages/Aboutus';
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
        // path:"/Contact",
        // element:(<><Header/><Contactus/></>), 
    },
])
export default router;