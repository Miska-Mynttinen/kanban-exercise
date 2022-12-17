import React, {useState} from 'react';
import {Column} from '../../components/Column';
import {TopRow} from '../../components/TopRow';


const Kanban = ({columns}) => {
  //Add top row with static information about the column on top of columns.
  //Pass columns as singular columns to Column component.
  return (
    <div>
      {Object.values(columns).map((column, columnIndex) =>
          <div key={columnIndex}>
            <TopRow />
            <Column column={column} columnIndex={columnIndex}/>
          </div>
        )
      }
    </div>
  )
}

export default Kanban;