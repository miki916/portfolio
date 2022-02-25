import React from "react";
import './projects.css';
import {Project} from './project.js'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/less/navigation";
import "swiper/less/pagination";
class Projects extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
       
    }

    render() {
   
        return <section className="project section" id="project">
            
            <h2 className="section_title">Project</h2>
            <span className="section_subtitle">Most recent work</span>
            
            <div className="project_container container ">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="swiper-wrapper">
                        
                    <SwiperSlide><Project title="Bot AutoCompra" description="Bot autocompra de Zalando (Javascript)" /></SwiperSlide>
                    <SwiperSlide><Project title="Portfolio" description="Portfolio donde muestro mi carrera y projectos realizados (React)" /></SwiperSlide>
                    <SwiperSlide><Project title="Ajedrez Online" description="Un Ajedrez Online donde puede jugar con tus amigs ( Java)" /></SwiperSlide>
                </Swiper>

            </div> 
        </section>
    }
}

export{Projects};
