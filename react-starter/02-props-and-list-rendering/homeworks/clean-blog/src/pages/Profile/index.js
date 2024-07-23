import { Outlet } from "react-router-dom";

const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
            <p>Header</p>

            <p>Content</p>

            <Outlet />

            <p>Footer</p>
        </div>
    );
}

export default Profile;