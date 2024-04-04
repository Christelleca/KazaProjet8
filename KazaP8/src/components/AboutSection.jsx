import React, { useState } from "react";

const AboutSection = ({ title, content }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="about_section">
            <div className="about_title">
                <h2>{title}</h2>
                <i
                    className={`fa-solid fa-chevron-up ${
                        expanded ? "rotate" : ""
                    }`}
                    onClick={toggleExpand}
                ></i>
            </div>
            <div className={`collapse_content ${expanded ? "show" : ""}`}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default AboutSection;
