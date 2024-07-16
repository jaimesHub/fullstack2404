import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

const DefaultComponents = () => {
    return (
        <>
            <Navigation />
            <Header />
            <Content />
            <Footer />
        </>
    );
}

export default DefaultComponents;