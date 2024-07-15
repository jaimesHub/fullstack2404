import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
            <footer className="border-top">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <a href="#!">
                                        <span className="fa-stack fa-lg"
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '68px', // Circle size
                                                height: '68px', // Circle size
                                                borderRadius: '50%', // Makes the div a circle
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faCircle} size="2x" className="fa-stack-1x" />
                                            <FontAwesomeIcon icon={faTwitter} size="1x" className="fa-stack-1x fa-inverse" />
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!">
                                        <span className="fa-stack fa-lg"
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '68px', // Circle size
                                                height: '68px', // Circle size
                                                borderRadius: '50%', // Makes the div a circle
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faCircle} size="2x" className="fa-stack-1x" />
                                            <FontAwesomeIcon icon={faFacebookF} size="1x" className="fa-stack-1x fa-inverse" />
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!">
                                        <span className="fa-stack fa-lg"
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '68px', // Circle size
                                                height: '68px', // Circle size
                                                borderRadius: '50%', // Makes the div a circle
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faCircle} size="2x" className="fa-stack-1x" />
                                            <FontAwesomeIcon icon={faGithub} size="1x" className="fa-stack-1x fa-inverse" />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <div className="small text-center text-muted fst-italic">Copyright &copy; James' Website 2024</div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;