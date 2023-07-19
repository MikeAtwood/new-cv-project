import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import './App.css';
import { u4 as uuidv4 } from 'uuid'

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
      <Form />
    </div>
  );
}

export default App;
