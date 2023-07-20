import React from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

const Form = ({ handleInputChange }) => {
    return (
        <div>
            <div className="input-field">
                <General 
                    handleInputChange={handleInputChange}
                />
                <Education 
                    handleInputChange={handleInputChange}
                />
                <Experience />
            </div>
        </div>
    )
}

export default Form