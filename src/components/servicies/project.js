import React from "react";
import './projects.css';


class Project extends React.Component{

    constructor(props){
        super(props);
        this.title = props.title;
        this.description = props.description;
    }

    componentDidMount(){

       
    }

    render() {

        return<div className="project_content grid swiper-slide">

                    <img alt="" src={require("../../assets/img/portfolio1.jpg")} className="project_img"/>

                    <div className="project_data">
                        <h3 className="project_title">{this.title}</h3>
                        <p className="project_description">{this.description}</p>
                        <a className="button button--flex button--small project_button">
                            Demo
                            <i className="fas fa-solid fa-arrow-right button_icon"></i>
                        </a>
                    </div>
                </div>
            
    }
}

export{Project};
