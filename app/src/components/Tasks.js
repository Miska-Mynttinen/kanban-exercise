import React from 'react';
import {Task} from './Task';


export const Tasks = ({tasks}) => {
  return (
    <>
      {Object.values(tasks).map(task =>
        <div key={task.id}>
          <Task taskId={task.id} taskName={task.name} assigned={task.assigned} description={task.description} importance={task.importance} />
        </div>
      )}
    </>
  )
}