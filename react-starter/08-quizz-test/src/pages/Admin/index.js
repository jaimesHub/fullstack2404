import { Outlet } from "react-router-dom";

const Admin = () => {
    return (
        <>
            <h1>Admin</h1>
            <Outlet />
        </>
    );
}

export default Admin;