import { Outlet } from "react-router-dom";
import ClassroomNavbar from "../Navbar/ClassroomNavbar";

const HomeLayout = ({ user }) => {
    return (
        <>
            <div>
                <ClassroomNavbar user={user} />
                <Outlet />
            </div>
        </>
    );
}

export default HomeLayout;