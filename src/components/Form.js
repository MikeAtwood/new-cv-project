import React from "react";
import General from "./General";
import Education from "./Education";

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
            </div>
        </div>
    )
}

export default Form