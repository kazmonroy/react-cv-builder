import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

import Input from './components/Input';
import Preview from './components/Preview';

function App() {
  const [input, setInput] = useState({
    skills: '',
    education: {
      university: '',
      startYear: '',
      finishYear: '',
      degree: '',
    },
    experience: {
      company: '',
      startYear: '',
      finishYear: '',
      position: '',
      jobDescription: '',
    },
  });

  const [userInfo, setUserInfo] = useState({
    firstname: '',
    lastname: '',
    profession: '',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequuntur placeat rerum delectus, ipsa quae quo nobis! Enim, qui natus?',
    phone: '0793574754',
    email: 'katherinemonroy@gmail.com',
    address: 'Regemenesgatan 25C',
    skills: [{ id: uuidv4(), item: 'Be awesome' }],
    education: [
      {
        id: uuidv4(),
        university: 'Linnaeus University',
        startYear: '2018',
        finishYear: '2020',
        degree: 'MSc. International Business',
      },
    ],
    experience: [
      {
        id: uuidv4(),
        company: 'Basesur',
        startYear: '2020',
        finishYear: '2020',
        position: 'Marketing Coordinator',
        jobDescription:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, recusandae?',
      },
    ],
  });

  const handleInputChange = (e) => {
    setUserInfo((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSkillsChange = (e) => {
    setInput((prevState) => {
      return {
        ...prevState,
        skills: e.target.value,
      };
    });
  };

  const addSkill = (e) => {
    e.preventDefault();

    if (input.skills === '') {
      return;
    } else
      setUserInfo((prevState) => {
        return {
          ...prevState,
          skills: [
            ...prevState.skills,
            {
              id: uuidv4(),
              item: input.skills,
            },
          ],
        };
      }),
        setInput((prevState) => {
          return {
            ...prevState,
            skills: '',
          };
        });
  };

  const deleteSkill = (e, skillId) => {
    setUserInfo((prevState) => {
      return {
        ...prevState,
        skills: prevState.skills.filter((skill) => skill.id !== skillId),
      };
    });
  };

  const handleEducationChange = (e) => {
    setInput((prevState) => {
      return {
        ...prevState,
        education: { ...prevState.education, [e.target.name]: e.target.value },
      };
    });
  };

  const addEducation = (e) => {
    e.preventDefault();

    const { university, startYear, finishYear, degree } = input.education;

    if (
      university === '' ||
      startYear === '' ||
      finishYear === '' ||
      degree === ''
    ) {
      return;
    } else {
      setUserInfo((prevState) => {
        return {
          ...prevState,
          education: [
            ...prevState.education,
            {
              id: uuidv4(),
              university: input.education.university,
              startYear: input.education.startYear,
              finishYear: input.education.finishYear,
              degree: input.education.degree,
            },
          ],
        };
      }),
        setInput((prevState) => {
          return {
            ...prevState,
            education: {
              university: '',
              startYear: '',
              finishYear: '',
              degree: '',
            },
          };
        });
    }
  };

  const deleteEducation = (e, eduId) => {
    setUserInfo((prevState) => {
      return {
        ...prevState,
        education: prevState.education.filter((edu) => edu.id !== eduId),
      };
    });
  };

  // Experience

  const handleExperienceChange = (e) => {
    setInput((prevState) => {
      return {
        ...prevState,
        experience: {
          ...prevState.experience,
          [e.target.name]: e.target.value,
        },
      };
    });
  };

  const addExperience = (e) => {
    e.preventDefault();

    const { company, startYear, finishYear, position, jobDescription } =
      input.experience;

    if (
      company === '' ||
      startYear === '' ||
      finishYear === '' ||
      position === '' ||
      jobDescription === ''
    ) {
      return;
    } else {
      setUserInfo((prevState) => {
        return {
          ...prevState,
          experience: [
            ...prevState.experience,
            {
              id: uuidv4(),
              company: input.experience.company,
              startYear: input.experience.startYear,
              finishYear: input.experience.finishYear,
              position: input.experience.position,
              jobDescription: input.experience.jobDescription,
            },
          ],
        };
      }),
        setInput((prevState) => {
          return {
            ...prevState,
            experience: {
              company: '',
              startYear: '',
              finishYear: '',
              position: '',
              jobDescription: '',
            },
          };
        });
    }
  };

  const deleteExperience = (e, expId) => {
    console.log(expId);
    setUserInfo((prevState) => {
      return {
        ...prevState,
        experience: prevState.experience.filter((exp) => exp.id !== expId),
      };
    });
  };

  return (
    <div className='App'>
      <Input
        input={input}
        userInfo={userInfo}
        handleInputChange={handleInputChange}
        handleSkillsChange={handleSkillsChange}
        addSkill={addSkill}
        handleEducationChange={handleEducationChange}
        addEducation={addEducation}
        handleExperienceChange={handleExperienceChange}
        addExperience={addExperience}
      />
      <Preview
        userInfo={userInfo}
        deleteSkill={deleteSkill}
        deleteEducation={deleteEducation}
        deleteExperience={deleteExperience}
      />
    </div>
  );
}

export default App;
