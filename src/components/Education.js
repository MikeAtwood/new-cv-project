import React from "react";

const Education = ({ handleInputChange, schoolName, titleOfStudy, studyStartDate, studyEndDate }) => {
    return (
        <div className="input-info">
            <h3>Education</h3>
            <input
                placeholder="School"
                style={{ border: 'none' }}
                type="text"
                name="schoolName"
                value={schoolName}
                onChange={handleInputChange}
            />
            <input
                placeholder="Subject"
                style={{ border: 'none' }}
                type="text"
                name="titleOfStudy"
                value={titleOfStudy}
                onChange={handleInputChange}
            />
            <input
                placeholder="Start Date"
                style={{ border: 'none' }}
                type="date"
                name="studyStartDate"
                value={studyStartDate}
                onChange={handleInputChange}
            />
            <input
                placeholder="End Date"
                style={{ border: 'none' }}
                type="date"
                name="studyEndDate"
                value={studyEndDate}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default Education