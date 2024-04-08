const Collapse = ({ title, content, expanded, toggleExpand }) => {
    return (
        <div className="collapse_section">
            <div className="collapse_title">
                <h2>{title}</h2>
                <i
                    onClick={toggleExpand}
                    className={`fa-solid fa-chevron-up ${
                        expanded ? "rotate" : ""
                    }`}
                ></i>
            </div>
            <div className={`collapse_content ${expanded ? "show" : ""}`}>
                {typeof content === "string" ? (
                    <p>{content}</p>
                ) : (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Collapse;
