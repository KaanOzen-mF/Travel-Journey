import React from "react"
import Topbar from "./components/Topbar.js"
import Card from "./components/Card.js"
import data from "./data.js"

export default function App() {
    
        const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                location={item.location}
                title={item.title}
                googleMapsUrl={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                imageUrl={item.imageUrl}
            />

        )
    })
    return (
        <div className="main--section">
            <Topbar />
            {cards}
        </div>
    )
}