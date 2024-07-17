import Navigation from "../layouts/Navigation";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

import AboutImageUrl from "../assets/img/about-bg.jpg";
const About = () => {
    return (
        <>
            <Navigation />
            <Header
                imageUrl={AboutImageUrl}
                typePage="page"
                title="About Me"
                description="This is what I do." />
            <Footer />
        </>
    );
}

export default About;