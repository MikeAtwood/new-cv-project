import React from "react";
import General from "./General";

const Form = ({ handleInputChange }) => {
    return (
        <div>
            <div className="input-field">
                <General 
                    handleInputChange={handleInputChange}
                />
            </div>
        </div>
    )
}

export default Form