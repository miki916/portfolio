import React from "react";
import './skills.css';
import {SkillContent} from './skillContent.js'

const dataFront = [["HTML","80%","html"],["CSS","75%","css"],["JavaScript","70%","js"]];
const dataBack = [["JAVA","60%","java"],["CSHARP","60%","css"],["PHP","50%","js"]];


class Skills extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){

        const skillContent = document.getElementsByClassName('skills_content'),
            skillHeader = document.querySelectorAll('.skills_header')

        function toggleSkills(){

            let itemClass = this.parentNode.className
            
            for(var i = 0; i< skillContent.length; i++){
                skillContent[i].className = 'skills_content skills_close'
            }

            if(itemClass === 'skills_content skills_close')
                this.parentNode.className = 'skills_content skills_open'
            
        }    

        skillHeader.forEach((el) =>{

            el.addEventListener('click', toggleSkills)

        })
    }

    render() {

        return <section className="skills section" id="skills">
            <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">My technical level</span>
            <div className="skills_container container grid">
                <div>
                    <SkillContent skillTitle="Frontend developer" skillSubtitle="More than 4 years" 
                            dataSkill={dataFront} skillIcon = "fas fa-code" classContent="skills_open"/>
                    <SkillContent skillTitle="Backend developer" skillSubtitle="More than 2 years" 
                            dataSkill={dataBack} skillIcon = "fas fa-server" classContent="skills_close"/>
                </div>
            </div>
        </section>
    }
}

export{Skills};
