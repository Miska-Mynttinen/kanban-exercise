import React, {useEffect} from 'react';
import {Column} from '../../components/Column';
import {TopRow} from '../../components/TopRow';

const Kanban = ({columns}) => {

  return (
    <>
      {Object.values(columns).map(column =>
          <div key={column["id"]}>
            <TopRow />
            <Column column={column} />
          </div>
        )
      }
    </>
  )
}

export default Kanban;