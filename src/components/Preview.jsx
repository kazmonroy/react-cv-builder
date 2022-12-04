import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Skill from './Skill';
import Education from './Education';
import Experience from './Experience';

const Preview = ({
  userInfo,
  deleteSkill,
  deleteEducation,
  deleteExperience,
}) => {
  const skillsElements = userInfo.skills.map((skill) => {
    return <Skill key={skill.id} skill={skill} deleteSkill={deleteSkill} />;
  });

  const educationElements = userInfo.education.map((eachEdu) => {
    return (
      <Education
        key={eachEdu.id}
        eachEdu={eachEdu}
        deleteEducation={deleteEducation}
      />
    );
  });

  const experienceElements = userInfo.experience.map((eachExp) => {
    return (
      <Experience
        key={eachExp.id}
        eachExp={eachExp}
        deleteExperience={deleteExperience}
      />
    );
  });
  return (
    <section className='Preview'>
      <div className='fullname'>
        <h1>
          {userInfo.firstname === '' ? 'Name' : userInfo.firstname}{' '}
          {userInfo.lastname === '' ? 'Lastname' : userInfo.lastname}
        </h1>
      </div>
      <div className='profession'>
        <h2>
          {userInfo.profession === '' ? 'Profession' : userInfo.profession}
        </h2>
      </div>
      <section className='Body'>
        <section className='Left'>
          <div className='about'>
            <img
              src='https://avatars.githubusercontent.com/u/62848532?v=4'
              alt=''
            />
            <h2>About</h2>
            <p>{userInfo.about}</p>
          </div>
          <div className='contact'>
            <h2>Contact</h2>
            <ul>
              <li>{userInfo.phone}</li>
              <li>{userInfo.email}</li>
              <li>{userInfo.address}</li>
            </ul>
          </div>
          <div className='skills'>
            <h2>Skills</h2>
            <ul>{skillsElements}</ul>
          </div>
        </section>
        <section className='Right'>
          <div className='education'>
            <h2>Education</h2>
            {educationElements}
          </div>
          <div className='experience'>
            <h2>Experience</h2>
            {experienceElements}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Preview;
