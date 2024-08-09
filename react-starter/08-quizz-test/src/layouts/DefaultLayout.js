import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

const DefaultLayout = () => {
    return (
        <>
            <Navigation />
            <Sidebar />
            <h1>DefaultLayout</h1>
            <h5>Content</h5>
        </>
    );
}

export default DefaultLayout;