import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Navigation from "../layouts/Navigation";

import ContactImageUrl from "../assets/img/contact-bg.jpg";

const Contact = () => {
    return (
        <>
            <Navigation />
            <Header
                imageUrl={ContactImageUrl}
                typePage="page"
                title="Contact Me"
                description="Have questions? I have answers."
            />
            <Footer />
        </>
    );
}

export default Contact;