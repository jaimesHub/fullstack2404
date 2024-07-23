import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Navigation from "../layouts/Navigation";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

const Home = () => {

    const [isRedirect, setIsRedirect] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();

    const handleRedirect = () => {
        // setIsRedirect(true); // way 1
        // navigate('/about'); // way 2

        setSearchParams({ page: 5, limit: 10 });
    }

    if (isRedirect) {
        return <Navigate to="/about" replace={isRedirect} />;
    }

    console.log(searchParams.get('page')); // http://localhost:3000/?page=5
    console.log(searchParams.get('limit')); // http://localhost:3000/?limit=10

    return (
        <>
            <Navigation />
            <Header title="Home Page" />
            <button onClick={handleRedirect}>Redirect</button>
            <Footer />
        </>
    );
}

export default Home;