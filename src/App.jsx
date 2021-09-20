import './App.scss';

// returns routes to components
function App() {
    return (
        <>
            <header>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    {/* Container wrapper */}
                    <div className="container-fluid">
                        {/* Toggle button */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"></i>
                        </button>

                        {/* Collapsible wrapper */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar brand */}
                            <a className="navbar-brand mt-2 mt-lg-0" href="">
                                <h1 className="nav_title text_shadow">JS</h1>
                            </a>
                            {/* Left links */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#skills">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                            {/* Left links */}
                        </div>
                        {/* Collapsible wrapper */}

                        {/* Right elements */}
                        <div className="d-flex align-items-center">
                            <a className="me-5" href="https://www.linkedin.com/in/jesse-sites/">
                                <i className="fab fa-linkedin-in fa-2x text_shadow"></i>
                            </a>
                            <a className="me-5" href="https://github.com/jesse318s">
                                <i className="fab fa-github fa-2x text_shadow"></i>
                            </a>
                        </div>
                        {/* Right elements */}
                    </div>
                    {/* Container wrapper */}
                </nav>
                {/* Navbar */}
            </header>

            <main className="bg-dark text-light">
                <section style={{ background: `url('${process.env.PUBLIC_URL}/img/landing_img.webp')`, backgroundSize: "cover", height: "100vh", width: "100vw" }}>
                    <p className="popout">
                        <span>J</span>
                        <span>E</span>
                        <span>S</span>
                        <span>S</span>
                        <span>E&nbsp;</span>
                        <span>S</span>
                        <span>I</span>
                        <span>T</span>
                        <span>E</span>
                        <span>S&nbsp;</span>
                        <span>-</span><br />
                        <span>W</span>
                        <span>E</span>
                        <span>B&nbsp;</span>
                        <span>D</span>
                        <span>E</span>
                        <span>V</span>
                        <span>E</span>
                        <span>L</span>
                        <span>O</span>
                        <span>P</span>
                        <span>E</span>
                        <span>R</span>
                    </p>
                    <div className="d-flex justify-content-center">
                        <a href="#skills" className="btn btn-dark btn-rounded btn-outline-* btn-lg blink">
                            <i className="fas fa-angle-down fa-2x"></i></a>
                    </div>
                </section>
                <div id="skills" style={{ position: "relative", bottom: "45px" }}></div>
                <section className="row text-center mt-5 mx-5">
                    <h2 className="mb-4 text_shadow">My Skills</h2>
                    <div className="col-6">
                        <p className="font-weight-bold pt-4 mb-2">HTML</p>
                        <div className="progress" style={{ backgroundColor: "black" }}>
                            <div className="progress-bar" role="progressbar" style={{ width: "100%", backgroundColor: "lightblue" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mb-2">CSS</p>
                        <div className="progress" style={{ backgroundColor: "black" }}>
                            <div className="progress-bar" role="progressbar" style={{ width: "98%", backgroundColor: "lightblue" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mb-2">SASS</p>
                        <div className="progress" style={{ backgroundColor: "black" }}>
                            <div className="progress-bar" role="progressbar" style={{ width: "95%", backgroundColor: "lightblue" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mb-2">JavaScript</p>
                        <div className="progress" style={{ backgroundColor: "black" }}>
                            <div className="progress-bar" role="progressbar" style={{ width: "95%", backgroundColor: "lightblue" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mb-2">Bootstrap</p>
                        <div className="progress" style={{ backgroundColor: "black" }}>
                            <div className="progress-bar" role="progressbar" style={{ width: "98%", backgroundColor: "lightblue" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-6">
                        <p className="font-weight-bold pt-4 mb-2">React.js</p>
                        <div className="progress" style={{ backgroundColor: "black" }}>
                            <div className="progress-bar" role="progressbar" style={{ width: "95%", backgroundColor: "lightblue" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mb-2">Node.js</p>
                        <div className="progress" style={{ backgroundColor: "black" }}>
                            <div className="progress-bar" role="progressbar" style={{ width: "95%", backgroundColor: "lightblue" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mb-2">MongoDB</p>
                        <div className="progress" style={{ backgroundColor: "black" }}>
                            <div className="progress-bar" role="progressbar" style={{ width: "89%", backgroundColor: "lightblue" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mb-2">Express.js</p>
                        <div className="progress" style={{ backgroundColor: "black" }}>
                            <div className="progress-bar" role="progressbar" style={{ width: "89%", backgroundColor: "lightblue" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <p className="font-weight-bold pt-4 mb-2">Wordpress</p>
                        <div className="progress" style={{ backgroundColor: "black" }}>
                            <div className="progress-bar" role="progressbar" style={{ width: "91%", backgroundColor: "lightblue" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                    </div>
                    <hr class="my-5" />
                </section>
                <div id="projects" style={{ position: "relative", bottom: "95px" }}></div>
                <section className="text-center mb-5">
                    <h2 className="mb-5 text_shadow">My Projects</h2>
                    <div className="accordion mx-5" id="projectsAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#collapseOne"
                                    aria-expanded="false"
                                    aria-controls="collapseOne"
                                >
                                    Granbury Art
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingOne"
                                data-mdb-parent="#projectsAccordion"
                            >
                                <div className="accordion-body text-dark">
                                    <p>The website for the artists of Granbury, TX.</p>
                                    <strong><p>I was only developer for this website.</p></strong>
                                    <p className="text-decoration-underline"><a href="https://www.granbury-art.com/">Visit website...</a></p>
                                    <img
                                        className="shadow-2-strong"
                                        src={process.env.PUBLIC_URL + "/img/granbury_art.webp"}
                                        width="75%"
                                        height="75%">
                                    </img>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    Granbury Fresh
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-mdb-parent="#projectsAccordion"
                            >
                                <div className="accordion-body text-dark">
                                    <p>The purpose of Granbury Fresh is to protect public health, public welfare, the environment,
                                        and the quality of life for the residents in Hood County with a special emphasis on Lake Granbury
                                        and the waters contributing to Lake Granbury.</p>
                                    <strong><p>I was leading developer for this website.</p></strong>
                                    <p className="text-decoration-underline"><a href="http://www.granburyfresh.org/">Visit website...</a></p>
                                    <img
                                        className="shadow-2-strong"
                                        src={process.env.PUBLIC_URL + "/img/granbury_fresh.webp"}
                                        width="75%"
                                        height="75%">
                                    </img>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    Princigration
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-mdb-parent="#projectsAccordion"
                            >
                                <div className="accordion-body text-dark">
                                    <p>Princigration Landing Page</p>
                                    <strong><p>I was leading developer for this website.</p></strong>
                                    <p className="text-decoration-underline"><a href="https://princigration.com/">Visit website...</a></p>
                                    <img
                                        className="shadow-2-strong"
                                        src={process.env.PUBLIC_URL + "/img/princigration.webp"}
                                        width="75%"
                                        height="75%">
                                    </img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="my-5 mx-5" />
                </section>
                <div id="about" style={{ position: "relative", bottom: "100px" }}></div>
                <section className="text-center">

                    <h2 className="mb-5 text_shadow">About Me</h2>

                    <div className="row mx-5">
                        <div className="col-12">
                            <p className="lead">Hello, my name is Jesse Sites and I'm a web developer based in Texas.</p>
                            <p>I'm a Computer Programming student with 3 years of experience in the field of information technology at Tarleton State University.
                                I interned at TIAER (A Tarleton State University research facility) for 2 years, and was a Student Tech for Classroom and Lab Support for 1 year.
                                I now create web application solutions for my clients utilizing my knowledge and strategies gained from Texas State Technical College,
                                my new place of study for Computer Programming.</p>
                            <p className="mb-0">I can create vanilla HTML/CSS/JS websites, React apps, and MERN stack apps. I can also manage and code Wordpress websites.</p>
                        </div>
                        <hr class="my-5" />
                    </div>

                </section>
            </main>

            <footer id="contact" className="bg-dark text-light">
                <div className="text-center mb-5">

                    <h2 className="mb-5 text_shadow">Contact Me</h2>

                    <p className="mb-5 mx-auto w-responsive">
                        I can be contacted via LinkedIn, email, text, call, or snail mail. Since a direct email may be caught in my spam filter,
                        my LinkedIn profile is the best method to contact me quickly. I check my LinkedIn messages daily.
                    </p>

                    <ul className="list-unstyled mb-0">
                        <li>
                            <i className="fab fa-linkedin-in fa-2x text-light text_shadow"></i>
                            <p className="text-decoration-underline">
                                <a href="https://www.linkedin.com/in/jesse-sites/">https://www.linkedin.com/in/jesse-sites/</a>
                            </p>
                        </li>
                        <li>
                            <i className="fas fa-envelope fa-2x text-light text_shadow"></i>
                            <p>jesse318s@gmail.com</p>
                        </li>
                        <li>
                            <i className="fas fa-phone fa-2x text-light text_shadow"></i>
                            <p>+1 325-455-4644</p>
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt fa-2x text-light text_shadow"></i>
                            <p>Hawley, TX PO Box 644, USA</p>
                        </li>
                    </ul>

                </div>
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2021 Copyright: Jesse Sites
                </div>
            </footer>
        </>
    );
}

export default App;
