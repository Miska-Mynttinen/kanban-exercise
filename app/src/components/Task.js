import React from 'react';
import {users} from '../api/mockData';

export const Task = ({taskId, taskName, assigned, description, importance,}) => {
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
  Object.values(users).map(user =>
    Object.values(user).map(u =>
      userList.push(u)
    )
  )

  return (
    <>
        <div className="row mb-3">
            <div className="col-2 example-grid-col">
              {taskId}
            </div>
            <div className="col-2 example-grid-col">
              {taskName}
            </div>

            <div className="col-3 example-grid-col">
              {Object.values(assigned).map(person => 
                  <div key={person + taskId}>
                    {userList[userList.indexOf(person) + 1]}
                  </div>
                )}
            </div>

            <div className="col-3 example-grid-col">
              {description}
            </div>
            <div className={`col-2 color-grid-col-${num}`}>
              {importance}
            </div>
        </div>
    </>
  )
}