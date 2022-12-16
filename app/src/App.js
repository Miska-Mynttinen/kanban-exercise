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
  /*
  //this function is for showing the available mocked Rest API,
  //remove this function when starting the exercise
  const exampleOfMockAPI = async () => {
    let res = await BoardAPI.getBoardColumns();
    console.log("get board columns", res);


    res = await UserAPI.getUsers();
    console.log("get users", res);

    await BoardAPI.editTask('dc0aa9a6-a4d3-45e2-86e1-37e793a4df52', {
              name: 'Infrastructure acc',
              assigned: [
                '76fbd508-3cb6-4b1a-a574-9046367fc3ac'
              ],
              importance: 1,
              description: 'Example description changed'
            })

    res = await BoardAPI.getBoardColumns();
    console.log("board columns after edit", res);

    await BoardAPI.deleteTask('dc0aa9a6-a4d3-45e2-86e1-37e793a4df52');

    res = await BoardAPI.getBoardColumns();
    console.log("board columns after delete", res);

    await BoardAPI.createTask('e38bba16-6c80-4ac3-9102-5dbb6aeb7c19', {
      name: 'Example',
      assigned: [],
      importance: 2,
      description: 'Example description'
    })

    res = await BoardAPI.getBoardColumns();
    console.log("board columns after create", res);


  }


  useEffect(() => {
    exampleOfMockAPI();
  }, [])*/


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
    console.log('result', result)
    if (!result.destination) return;
    const { source, destination } = result;
    console.log('source', source)
    console.log('destination', destination)
    console.log('allColumns', allColumns)
    console.log('allColumns.data', Object.values(allColumns.data))
    let checkColumns = []
    /*Object.values(allColumns.data).map(column =>
      checkColumns.push(column)
    )
    console.log('checkColumns', checkColumns)*/

    console.log('source.droppableId', source.droppableId)


    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = allColumns[source.droppableId];
      const destColumn = allColumns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setColumns({
        ...allColumns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      const column = allColumns.data[source.droppableId];
      console.log('column', column)
      const copiedTasks = [...column.tasks];
      //alla error
      const [removed] = copiedTasks.splice(source.index, 1);
      copiedTasks.splice(destination.index, 0, removed);
      console.log('copiedTasks')
      console.log('[removed]', [removed])
      console.log('removed', removed)


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

  /*
  ...allColumns,
        data: {
          ...source.droppableId,
          tasks: copiedTasks*/

  return (
    <div className="container">
      {/*create your own containers and components*/}
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

