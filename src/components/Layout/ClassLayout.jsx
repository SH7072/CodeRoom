import { Outlet } from "react-router-dom";
import ClassNavbar from "../Navbar/ClassNavbar";


const ClassLayout = () => {
    return (
        <>
            <div>
                <ClassNavbar />
                <Outlet />
            </div>
        </>
    );
}

export default ClassLayout;