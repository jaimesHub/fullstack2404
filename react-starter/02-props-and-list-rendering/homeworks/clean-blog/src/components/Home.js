import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Navigation from "../layouts/Navigation";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {

    const [isRedirect, setIsRedirect] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        // setIsRedirect(true); // way 1
        navigate('/about'); // way 2
    }

    if (isRedirect) {
        return <Navigate to="/about" replace={isRedirect} />;
    }

    return (
        <>
            <Navigation />
            <Header title="Home Page" />
            <button onClick={handleClick}>Redirect</button>
            <Footer />
        </>
    );
}

export default Home;