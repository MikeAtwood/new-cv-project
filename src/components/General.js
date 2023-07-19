import React from "react";

const General = ({ handleInputChange, firstName, lastName, email, phoneNumber }) => {
    return (
        <div className="input-info">
            <input
                placeholder="First Name"
                style={{ border: 'none' }}
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
            />
             <input
                placeholder="Last Name"
                style={{ border: 'none' }}
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
            />
             <input
                placeholder="Email"
                style={{ border: 'none' }}
                type="text"
                name="email"
                value={email}
                onChange={handleInputChange}
            />
             <input
                placeholder="Phone Number"
                style={{ border: 'none' }}
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default General