import React from "react";
import './qualification.css'

class QualiContent extends React.Component{

    constructor(props){
        super(props);
        this.title = props.title;
        this.subtitle = props.subtitle;
        this.calendar = props.calendar;
        this.pos = props.pos;
    }
    render() {

        return <div className="qualification_data">
            <div>
                <h3 className="qualification_title">{this.title}</h3>
                <span className="qualification_subtitle">{this.subtitle}</span>
                <div className="qualification_calendar">
                    <i className="far fa-calendar-alt icon_calendar"></i>
                    {this.calendar}
                </div>
            </div>
            
        </div>
    }

    checkPos(index){

        if(index == "1" && this.pos == index){
            return <><div></div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                    </>
        }else if(this.pos == index){
            return <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                </div>

        }

        
    }

    

}

export{QualiContent};
