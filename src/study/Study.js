import React, { useState, Fragment } from "react";
import Header from "../general/Header";
import "./Study.css"; // Import your CSS file for styling
import refreshIcon from './imageSDG/refresh.png';
import '../general/general.css';
const Study = () => {
    const allSDGS = [
        { id: 1, title: "No Poverty", description: "End poverty in all its forms everywhere." },
        { id: 2, title: "Zero Hunger", description: "End hunger, achieve food security and improved nutrition." },
        { id: 3, title: "Good Health and Well-being", description: "Ensure healthy lives and promote well-being for all." },
        { id: 4, title: "Quality Education", description: "Ensure inclusive and equitable quality education." },
        { id: 5, title: "Gender Equality", description: "Achieve gender equality and empower all women and girls." },
        { id: 6, title: "Clean Water and Sanitation", description: "Ensure availability and sustainable management of water." },
        { id: 7, title: "Affordable and Clean Energy", description: "Ensure access to affordable, reliable, sustainable energy." },
        { id: 8, title: "Decent Work and Economic Growth", description: "Promote sustained, inclusive economic growth." },
        { id: 9, title: "Industry, Innovation, and Infrastructure", description: "Build resilient infrastructure." },
        { id: 10, title: "Reduced Inequality", description: "Reduce inequality within and among countries." },
        { id: 11, title: "Sustainable Cities and Communities", description: "Make cities and human settlements inclusive." },
        { id: 12, title: "Responsible Consumption and Production", description: "Ensure sustainable consumption and production patterns." },
        { id: 13, title: "Climate Action", description: "Take urgent action to combat climate change." },
        { id: 14, title: "Life Below Water", description: "Conserve and sustainably use the oceans." },
        { id: 15, title: "Life on Land", description: "Protect, restore, and promote sustainable use of terrestrial ecosystems." },
        { id: 16, title: "Peace, Justice, and Strong Institutions", description: "Promote peaceful and inclusive societies." },
        { id: 17, title: "Partnerships for the Goals", description: "Strengthen the means of implementation." }
    ];

    // State to store randomly chosen SDGs
    const [randomSDGs, setRandomSDGs] = useState(getRandomSDGs());

    // Function to get random SDGs
    function getRandomSDGs() {
        return allSDGS.sort(() => 0.5 - Math.random()).slice(0, 1);
    }

    // Function to refresh SDGs
    const refreshSDGs = () => {
        setRandomSDGs(getRandomSDGs());
    };

    const showSDGDetailedInfo = (sdgID) => {

        return (
            <div>
                <iframe
                    src={`https://sdgs.un.org/goals/goal${sdgID}`}
                    title={`SDG ${sdgID}`}
                    width="100%"
                    height="500px"
                    style={{ border: "none" }}
                />
            </div>
        );
    };

    return (
        <Fragment>
            <Header />
            <div className="spinner--container">
                {randomSDGs.map((sdg) => (
                    <a
                        href={`https://sdgs.un.org/goals/goal${sdg.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sdg-link" // Add your custom class here
                        key={sdg.id}
                    >
                        <h2>{sdg.title}</h2>
                        <p>🎉 Click for fun facts!</p>
                    </a>

                ))}
            </div>
            <button className="refresh-button" onClick={refreshSDGs}>
                <img src={refreshIcon} alt="Refresh" />
                Refresh SDG
            </button>
        </Fragment>
    );
};

export default Study;
