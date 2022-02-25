import React from "react";
import './qualification.css';
import {QualiContent} from './qualiContent.js'

class Qualification extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){

        const tabs = document.querySelectorAll('[data-target]'),
            tabContents = document.querySelectorAll('[data-content]');

            tabs.forEach(tab =>{
    
                tab.addEventListener('click', () =>{

                    const target = document.querySelector(tab.dataset.target)

                    tabContents.forEach(tabContent =>{
                        tabContent.classList.remove('qualification_active')
                    })

                    target.classList.add('qualification_active')

                    tabs.forEach(tab2 =>{
                        tab2.classList.remove('qualification_active')
                    })
                    tab.classList.add('qualification_active')
                })
    
            })

    }
    
    render() {

        return <section className="qualification section">
                <h2 className="section_title">Qualification</h2>
                <span className="section_subtitle">My personal journey</span> 
                <div className="qualification_container container">
                    <div className="qualification_tabs">
                        <div className="qualification_button button--flex qualification_active" data-target="#education">
                            <i className="fas fa-graduation-cap qualification_icon"></i>
                            Education
                        </div>
                        <div className="qualification_button button--flex" data-target="#work">
                        <i className="fas fa-briefcase qualification_icon"></ i>
                            Work
                        </div>
                    </div>
                    <div className="qualification_sections">
                        <div className="qualification_content qualification_active" data-content id="education">
                        
                            <QualiContent title="SMR" subtitle="Burjassot (Valencia) - Aula Campus" calendar="2017 - 2019" pos="2"/>
                            <QualiContent title="DAW" subtitle="La Pobla de Vallbona (Valencia) - La Vereda" calendar="2019 - presente" pos="1"/>
                       
                        </div>
                        <div className="qualification_content " data-content id="work">
                        
                            <QualiContent title="Programador" subtitle="Valencia - PUBLINFO " calendar="2021 - presente" pos="2"/>
                   
                        </div>
                    </div>
                </div>
        </section>
    }

    

}

export{Qualification};
