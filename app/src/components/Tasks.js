import React from 'react';
import {Task} from './Task';
import { Draggable, useTouchSensor } from 'react-beautiful-dnd';


export const Tasks = ({tasks, columnIndex}) => {
  console.log('columnIndex2', columnIndex)
  return (
    <>
      {Object.values(tasks).map((task, index) =>
        <div key={task.id}>
          <Draggable draggableId={task.id} index={index} columnIndex={columnIndex}>
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