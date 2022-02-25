import React from "react";
import './skills.css';

class SkillContent extends React.Component{

    constructor(props){
        
        super(props);
        this.skillTitle=props.skillTitle
        this.skillSubtitle=props.skillSubtitle
        this.dataSkill=props.dataSkill
        this.skillIcon = props.skillIcon
        this.classContent = props.classContent
    }

    componentDidMount(){


    }
 
    render() {

        var icon = this.skillIcon + " skills_icon"
        var className = "skills_content " + this.classContent; 

        return<div className={className}>
                    <div className="skills_header">
                        <i className={icon}></i>
                        <div>
                            <h1 className="skills_title"> {this.skillTitle}</h1>
                            <span className="skills_subtitle">{this.skillSubtitle}</span>
                        </div>
                        <i className="fas fa-angle-down skills_arrow"></i>
                    </div>
                <div className="skills_list grid">
                    {this.getAllSkill()}
                </div>
            </div> 
    }

    getAllSkill(){

        return <>
            {this.dataSkill.map(skill => {  
                return (
                    this.getSkills(skill)
                );
                
            })}
        </>
    }

    getSkills(skill){

        var className = "skills_percentage skills_" + skill[2];
        return <div className="skills_data">
                <div className="skills_title">
                    <h3 className="skills_name">{skill[0]}</h3>
                    <span className="skills_number">{skill[1]}</span>
                </div>
                <div className="skills_bar">
                    <span style={{width: skill[1]}} className={className} id={skill[2]}></span>
                </div>
            </div>

    }
}

export{SkillContent};
