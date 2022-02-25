import React from "react";
import './main.css';

class Main extends React.Component{


    render() {
        return <main className="main">

            <section className="home section" id="home">

                <div className="home_container container grid">
                    <div className="home_content grid">
                        <div className="home_social">
                            <a href="https://www.linkedin.com/in/msanmartinl/" target="_blank" className="home_social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="" target="_blank" className="home_social-icon">
                                <i className="fab fa-dribbble"></i>
                            </a>
                            <a href="https://github.com/miki916" target="_blank" className="home_social-icon">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>

                        <div className="home_data">
                            <h1 className="home_title">Hola, soy Miguel</h1>
                            <h3 className="home_subtitle">FullStack Developer</h3>
                            <p className="home_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            </p>
                            <a href="#contacto" className="button button-flex">
                                Contact Me <i className="far fa-paper-plane button_icon"></i>
                            </a>
                        </div>   
                        <div className="home_img">
                                <img className="home_blob-img" src={require('../../assets/img/icon.jpeg')}/>
                        </div>   
                    </div>

                    <div className="home_scroll">
                        <a href="#about" className="home_scroll-button button-flex">
                            <i className="fas fa-mouse home_scroll-mouse"></i>
                            <span className="home_scroll-name">Scroll down</span>
                            <i className="fas fa-arrow-down home_scroll-arrow"></i>
                        </a>
                    </div>   
                </div>

            </section>

        </main>
    }


}

export{Main};
