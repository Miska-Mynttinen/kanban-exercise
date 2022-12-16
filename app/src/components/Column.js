import React from 'react';
import {Tasks} from './Tasks';
import { Droppable } from 'react-beautiful-dnd';


export const Column = ({column, columnIndex}) => {
  console.log('kanban column', column)
  console.log('columnIndex1', columnIndex)
  return (
    <>
      <Droppable droppableId={String(columnIndex)}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <Tasks tasks={column["tasks"]} columnIndex={columnIndex} />
            {provided.placeholder}
          </div>
        )}
        
      </Droppable>
    </>
  )
}

//column["id"]