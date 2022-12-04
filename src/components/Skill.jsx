import React from 'react';

const Skill = ({ skill, deleteSkill }) => {
  return (
    <li className='each-skill'>
      {skill.item} <button onClick={(e) => deleteSkill(e, skill.id)}>x</button>
    </li>
  );
};

export default Skill;
