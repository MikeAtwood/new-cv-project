import React from "react";

const NewForm = ({ firstName, }) => {
    return (
        <div className="input-field">
            <div className="input-info">
                <input
                    className="newform-general"
                    type="text"
                    style={{ border: 'none' }}
                    name="firstName"
                    value={firstName}
                    readOnly
                />

            </div>
        </div>
    )
}   

export default NewForm