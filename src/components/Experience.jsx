import React from 'react';

const Experience = ({ eachExp, deleteExperience }) => {
  return (
    <div className='each-experience'>
      <div className='experience-info'>
        <div className='exp-header'>
          {eachExp.company}
          <span>
            {eachExp.startYear} - {eachExp.finishYear}
          </span>
        </div>
        <h4>{eachExp.position}</h4>
        <p>{eachExp.jobDescription}</p>
      </div>
      <button onClick={(e) => deleteExperience(e, eachExp.id)}>x</button>
    </div>
  );
};

export default Experience;
