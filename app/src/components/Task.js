import React from 'react';
import {users} from '../api/mockData';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

export const Task = ({taskId, taskName, assigned, description, importance,}) => {
  //change color based on importance in the importance grid box
  let num = 0
  if (importance === 0) {
    num = 0
  } else if (importance === 1) {
    num = 1
  } else if (importance === 2) {
    num = 2
  }

  //Flattens all user data to an array on single values. 
  //First the id of the user then the next index is the name of the user.
  let userList = []
  Object.values(users).forEach(user =>
    Object.values(user).forEach(u =>
      userList.push(u)
    )
  )

  return (
    <>
      <div style={{backgroundColor: 'white'}} className="row mb-0">
        <div className="col-2 example-grid-col">
          {taskId} 
        </div>
        <div className="col-2 example-grid-col">
          <EditText defaultValue={taskName} inline/>
        </div>

        <div className="col-3 example-grid-col">
          {Object.values(assigned).map(person => 
            <div key={person + taskId}>
              <EditText defaultValue={userList[userList.indexOf(person) + 1]}inline/>
            </div>
          )}
        </div>

        <div className="col-3 example-grid-col">
          <EditTextarea defaultValue={description} />
        </div>
        <div className={`col-2 color-grid-col-${num}`}>
          <EditText defaultValue={String(importance)} inline/>
        </div>
      </div>
    </>
  )
}