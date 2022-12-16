import React, {useState} from 'react';
import {Column} from '../../components/Column';
import {TopRow} from '../../components/TopRow';


const Kanban = ({columns}) => {
  console.log('kanban columns', columns)
  return (
    <>
      {Object.values(columns).map((column, columnIndex) =>
          <div key={columnIndex}>
            <TopRow />
            <Column column={column} columnIndex={columnIndex}/>
          </div>
        )
      }
    </>
  )
}

export default Kanban;