import React from 'react';
import {Task} from './Task';
import { Draggable, useTouchSensor } from 'react-beautiful-dnd';


export const Tasks = ({tasks}) => {
  //Uses the draggable tag to make single tasks draggable and have and index in the DnD column.
  //Pass tasks as singular tasks to Task component.
  return (
    <>
      {Object.values(tasks).map((task, index) =>
        <div key={task.id}>
          <Draggable draggableId={task.id} index={index} >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}    
              >
                <Task taskId={task.id} taskName={task.name} assigned={task.assigned} description={task.description} importance={task.importance} />
              </div>
            )}
          </Draggable>
        </div>
      )}
    </>
  )
}