import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

const Tasks = (props) => (
  <>
      {props.tasks.map((task) =>
          (<Task key={task.id} task={task} onDelete={props.onDelete} onToggle={props.onToggle}/>))
      }
  </>
);

Tasks.propTypes = {
    tasks: PropTypes.array
};

Tasks.defaultProps = {};

export default Tasks;
