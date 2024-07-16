import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

const DefaultLayout = (props) => {
    return (
        <>
            <Navigation />
            <Header />
            {props.children}
            <Footer />
        </>
    );
}

export default DefaultLayout;