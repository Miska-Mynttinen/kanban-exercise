import React from 'react';

export const TopRow = () => {
  return (
    <div className="row mb-3">
        <h4 className="col-2 example-grid-col">task id</h4>
        <h4 className="col-2 example-grid-col">name</h4>
        <h4 className="col-3 example-grid-col">assigned</h4>
        <h4 className="col-3 example-grid-col">description</h4>
        <h4 className="col-2 example-grid-col">importance</h4>
    </div>
  )
}