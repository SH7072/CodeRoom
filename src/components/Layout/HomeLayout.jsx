import { Outlet } from "react-router-dom";
import ClassroomNavbar from "../Navbar/ClassroomNavbar";

const HomeLayout = () => {
    return (
        <>
            <div>
                <ClassroomNavbar />
                <Outlet />
            </div>
        </>
    );
}

export default HomeLayout;