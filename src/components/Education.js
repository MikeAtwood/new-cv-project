import React from "react";

const Education = ({ handleInputChange, schoolName }) => {
    return (
        <div className="input-info">
            <input
                placeholder="School"
                style={{ border: 'none' }}
                type="text"
                name="schoolName"
                value={schoolName}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default Education