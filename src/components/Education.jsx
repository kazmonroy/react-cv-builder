import React from 'react';

const Education = ({ eachEdu, deleteEducation }) => {
  return (
    <div className='each-education'>
      <div className='education-info'>
        <p>
          {eachEdu.university}
          <span>
            {eachEdu.startYear} - {eachEdu.finishYear}
          </span>
        </p>
        <p>{eachEdu.degree}</p>
      </div>
      <button
        className='delete-edu'
        onClick={(e) => deleteEducation(e, eachEdu.id)}
      >
        x
      </button>
    </div>
  );
};

export default Education;
