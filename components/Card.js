import React from "react"

export default function Card(props){
    
    return (
        <div className="card--container">
            <img src={props.imageUrl} />
            <div className="card--text">
                <div className="card--location">
                    <img src="Location--Icon.png" />
                    <p className="location--name">{props.location}</p>
                    <a href={props.googleMapsUrl} className="location--link">View on Google Maps</a> 
                </div>
                
                <div className="card--info">
                    <p className="location">{props.title}</p>
                    <p className="travel--time">{props.startDate} - {props.endDate}</p>
                    <p className="location--info">{props.description}</p>
                </div>
            </div>
        </div>
    )    
}