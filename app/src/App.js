import React, {useEffect, useState} from "react";
import BoardAPI from './api/board';
import UserAPI from './api/user';
import Kanban from './containers/Kanban';
import TopKanban from './containers/TopKanban';
import {
  Routes,
  Route
} from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';


const App = () => {
  const [allColumns, setColumns] = useState([])

  useEffect(() => {
    mockAPI();
  }, [])

  const mockAPI = async () => {
    await BoardAPI.getBoardColumns()
                  .then(res => {
                    setColumns(res)
                  })
  }


  const onDragEnd = (result, allColumns, setColumns) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    // If same destination ass source then do nothing.
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    //Checks if different column then tasks original one.
    //If is different moves task to destination column and removes task from previous column.
    //Else move within same column.
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = allColumns.data[source.droppableId];
      const destColumn = allColumns.data[destination.droppableId];
      const sourceTasks = [...sourceColumn.tasks];
      const destTasks = [...destColumn.tasks];
      const [removed] = sourceTasks.splice(source.index, 1);
      destTasks.splice(destination.index, 0, removed);

      setColumns({
        ...allColumns,
        data: {
          ...allColumns.data,
          [source.droppableId]:{
            ...[source.droppableId],
            tasks: sourceTasks
          }, 
          [destination.droppableId]: {
            ...[destination.droppableId],
            tasks: destTasks
          }
        }
      });

    } else {
      const column = allColumns.data[source.droppableId];
      const copiedTasks = [...column.tasks];
      const [removed] = copiedTasks.splice(source.index, 1);
      copiedTasks.splice(destination.index, 0, removed);

      setColumns({
        ...allColumns,
        data: {
          ...allColumns.data,
          [source.droppableId]: {
            ...[source.droppableId],
            tasks: copiedTasks
          }
        }
      });
    }
  }


  return (
    <div className="container">
      <Routes>
        <Route path="/" element={
          <div>
            <TopKanban/>
            <DragDropContext
              onDragEnd={(result) => onDragEnd(result, allColumns, setColumns)}
            >
              {Object.values(allColumns).map(columns =>
                <div key={columns}>
                  <Kanban columns={columns} />
                </div>
              )} 
            </DragDropContext>
         </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

