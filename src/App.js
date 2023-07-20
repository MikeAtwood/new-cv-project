import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';
import { v4 as uuidv4 } from 'uuid'

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

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setNewFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }




  return (
    <div className="App">
      <div className='colomn'>
        <Form
          newFormData={newFormData}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default App;
