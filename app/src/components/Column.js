import React from 'react';
import {Tasks} from './Tasks';
import { Droppable } from 'react-beautiful-dnd';

export const Column = ({column, columnIndex}) => {
  //Make columns the place where draggable task can be dropped to.
  //Indexing columns with indexes from 0 upwards.
  //Get tasks from column and pass to Tasks component.
  return (
    <>
      <Droppable droppableId={String(columnIndex)}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <Tasks tasks={column["tasks"]} />
            {provided.placeholder}
          </div>
        )}
        
      </Droppable>
    </>
  )
}