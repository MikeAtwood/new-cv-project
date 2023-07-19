import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [newFormData, setNewFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    schoolName: '',
    titleOfStudy: '',
    studyStartDate: '',
    studyEndDate: '',
    numExperiences: 0,
    maxExperiences: 5,
    experiences: [
      {
        id: uuidv4(),
        companyName: '',
        position: '',
        mainTasks: '',
        jobStartDate: '',
        jobEndDate: '',
      }
    ]
  })

  

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
