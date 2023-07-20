import React from "react";

const Experience = ({ handleExperienceChange, companyName, position, mainTasks, jobStartDate, jobEndDate }) => {
    return (
        <div className="input-info">
            <h3>Experience</h3>
            <input
                placeholder="Company"
                style={{ border: 'none' }}
                type="text"
                name="companyName"
                value={companyName}
                onChange={handleExperienceChange}
            />
            <input
                placeholder="Position"
                style={{ border: 'none' }}
                type="text"
                name="position"
                value={position}
                onChange={handleExperienceChange}
            />
            <input
                placeholder="Tasks"
                style={{ border: 'none' }}
                type="text"
                name="mainTasks"
                value={mainTasks}
                onChange={handleExperienceChange}
            />
            <input
                placeholder="Start Date"
                style={{ border: 'none' }}
                type="date"
                name="jobStartDate"
                value={jobStartDate}
                onChange={handleExperienceChange}
            />
            <input
                placeholder="End Date"
                style={{ border: 'none' }}
                type="date"
                name="jobEndDate"
                value={jobEndDate}
                onChange={handleExperienceChange}
            />
        </div>
    )
}

export default Experience