import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';
import { v4 as uuidv4 } from 'uuid'
import NewForm from './components/NewForm';
// import Experience from './components/Experience';

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

  const handleExperienceChange = (event, index) => {
    const { name, value } = event.target
    setNewFormData(prevState => {
      const updatedExperiences = prevState.experiences.map(experience => {
        if (experience.id === index) {
          return {
            ...experience,
            [name]: value
          }
        }
        return experience
      })
      return {
        ...prevState,
        experiences: updatedExperiences
      }
    })
  }

  const createNewExperience = () => {
    const NewExperience = {
      id: uuidv4(),
      companyName: '',
      position: '',
      mainTasks: '',
      jobStartDate: '',
      jobEndDate: '',
    }
    return NewExperience;
  }

  const handleAddExperience = () => {
    if (newFormData.experiences.length < newFormData.maxExperiences) {
      const NewExperience = createNewExperience()
      setNewFormData(prevState => ({
        ...prevState,
        experiences: [...prevState.experiences, NewExperience],
        numExperiences: prevState.experiences.length + 1
      }))
    }
  }

  // const experienceSections = newFormData.experiences.map(experience => (
  //   <Experience
  //     key={experience.id}
  //     experience={experience}
  //     handleExperienceChange={(event) => handleExperienceChange(event, experience.id)}
  //   />
  // ))
  

  return (
    <div className="App">
      <div className='column'>
        <h1>form</h1>
        <Form
          newFormData={newFormData}
          handleInputChange={handleInputChange}
          handleExperienceChange={handleExperienceChange}
          handleAddExperience={handleAddExperience}
          experiences={newFormData.experiences}
        />
      </div>
      <div className='column'>
        <h1>new form</h1>
        <NewForm
        firstName={newFormData.firstName}
        lastName={newFormData.lastName}
        email={newFormData.email}
        phoneNumber={newFormData.phoneNumber}
        schoolName={newFormData.schoolName}
        titleOfStudy={newFormData.titleOfStudy}
        studyStartDate={newFormData.studyStartDate}
        studyEndDate={newFormData.studyEndDate}
        newFormData={newFormData}
        experiences={newFormData.experiences}
        handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default App;
