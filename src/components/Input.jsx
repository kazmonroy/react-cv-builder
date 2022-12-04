import React from 'react';

const Input = ({
  input,
  userInfo,
  handleInputChange,
  handleEducationChange,
  handleSkillsChange,
  addSkill,
  addEducation,
  handleExperienceChange,
  addExperience,
}) => {
  return (
    <section className='Input'>
      <h2>General Info</h2>
      <div className='fullname'>
        <div className='input-fields'>
          <label htmlFor='firstname'>First name</label>
          <input
            type='text'
            id='firstname'
            name='firstname'
            value={userInfo.firstname}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className='input-fields'>
          <label htmlFor='lastname'>Lastname</label>
          <input
            type='text'
            id='lastname'
            name='lastname'
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>

      <div className='profession input-fields'>
        <label htmlFor='profession'>Profession</label>
        <input
          type='text'
          id='profession'
          name='profession'
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <section className='BodyInput'>
        <div className='about input-fields'>
          <label htmlFor='about'>About:</label>
          <textarea
            rows='4'
            id='about'
            name='about'
            onChange={(e) => handleInputChange(e)}
          ></textarea>
        </div>
        <div className='contact'>
          <h2>Contact</h2>
          <div className='phone input-fields'>
            <label htmlFor='phone'>Phone</label>
            <input
              type='text'
              id='phone'
              name='phone'
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className='email input-fields'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className='address input-fields'>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              id='address'
              name='address'
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div className='education'>
          <h2>Education</h2>
          <div className='top-field'>
            <div className='uni input-fields'>
              <label htmlFor='university'>University</label>
              <input
                type='text'
                id='university'
                name='university'
                value={input.education.university}
                onChange={(e) => handleEducationChange(e)}
              />
            </div>
            <div className='start-year input-fields'>
              <label htmlFor='startYear'>Start</label>
              <input
                type='text'
                id='startYear'
                name='startYear'
                value={input.education.startYear}
                onChange={(e) => handleEducationChange(e)}
              />
            </div>
            <div className='finish-year input-fields'>
              <label htmlFor='finishYear'>Finish</label>
              <input
                type='text'
                id='finishYear'
                name='finishYear'
                value={input.education.finishYear}
                onChange={(e) => handleEducationChange(e)}
              />
            </div>
          </div>
          <div className='input-fields'>
            <label htmlFor='degree'>Degree</label>
            <input
              type='text'
              id='degree'
              name='degree'
              value={input.education.degree}
              onChange={(e) => handleEducationChange(e)}
            />
          </div>

          <button onClick={(e) => addEducation(e)}>add</button>
        </div>
        <div className='experience'>
          <h2>Experience</h2>
          <div className='top-field'>
            <div className='uni input-fields'>
              <label htmlFor='company'>Company</label>
              <input
                type='text'
                id='company'
                name='company'
                value={input.experience.company}
                onChange={(e) => handleExperienceChange(e)}
              />
            </div>
            <div className='start-year input-fields'>
              <label htmlFor='startYear'>Start</label>
              <input
                type='text'
                id='startYear'
                name='startYear'
                value={input.experience.startYear}
                onChange={(e) => handleExperienceChange(e)}
              />
            </div>
            <div className='finish-year input-fields'>
              <label htmlFor='finishYear'>Finish</label>
              <input
                type='text'
                id='finishYear'
                name='finishYear'
                value={input.experience.finishYear}
                onChange={(e) => handleExperienceChange(e)}
              />
            </div>
          </div>
          <div className='input-fields'>
            <label htmlFor='position'>Position</label>
            <input
              type='text'
              id='position'
              name='position'
              value={input.experience.position}
              onChange={(e) => handleExperienceChange(e)}
            />
          </div>
          <div className='input-fields'>
            <label htmlFor='jobDescription'>Job description</label>
            <textarea
              rows='4'
              id='jobDescription'
              name='jobDescription'
              value={input.experience.jobDescription}
              onChange={(e) => handleExperienceChange(e)}
            ></textarea>
          </div>

          <button onClick={(e) => addExperience(e)}>add</button>
        </div>
        <div className='skills'>
          <h2>Skills</h2>
          <input
            type='text'
            id='skills'
            name='skills'
            value={input.skills}
            onChange={handleSkillsChange}
          />

          <button onClick={(e) => addSkill(e)}>add</button>
        </div>
      </section>
    </section>
  );
};

export default Input;
