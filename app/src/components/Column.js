import React from 'react';
import {Tasks} from './Tasks';


export const Column = ({column}) => {
  return (
    <>
      <Tasks tasks={column["tasks"]} />
    </>
  )
}