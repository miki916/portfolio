
import './about.css';
import React from "react";
import PDF from "../../assets/pdf/curriculum.pdf";

class About extends React.Component {


    render() {
      return <section className='about section' id='about'>
            <h2 className='section_title'>About Me</h2>
            <span className='section_subtitle'>My Introduction</span>

            <div className='about_container container grid'> 
                {/*<img src='../assets/about.jpg' className='about_img'/>*/}
                <div className='about_data'>
                    <p className="about_description">Estudiante de Desarrollo de Aplicaciones Web, con ganas de aprender y de incorporarme al mundo laboral. Me 
                    considero una persona con facilidad en trabajar en equipo.
 </p>
                    <div className='about_info'>
                        <div>
                            <span className='about_info-title'>0.5+</span>
                            <span className='about_indo-name'>Años <br/> experiencia</span>
                        </div>
                        <div>
                            <span className='about_info-title'>8+</span>
                            <span className='about_indo-name'>Projectos <br/> completados</span>
                        </div>
                       
                    </div>
                    <div className='about_buttons'>
                        <a download="" href={PDF} className='button button--flex'>
                            Download CV <i className="far fa-save button_icon"></i>
                        </a>
                    </div>
                </div>
            </div>
      </section>
    }
  }


  export{About};
