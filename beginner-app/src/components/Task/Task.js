import React from 'react';
import PropTypes from 'prop-types';
import {FaTimes} from 'react-icons/fa';


const Task = ({task, onDelete, onToggle}) => (
  <>
    <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text}
            <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={()=> onDelete(task.id)}/>
        </h3>
        <p>{task.day}</p>
    </div>
  </>
);

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        day: PropTypes.string,
        reminder: PropTypes.bool
    })
};

Task.defaultProps = {};

export default Task;
