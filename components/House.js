import React from 'react'

function House({house}) {
  return (
    <div className="row mt-4">
      <div className="col-6">
        <div className="row">
          <img src={`./houseImages/${house.image}`} alt="House pic" />
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-2">
          <h5 className="col-12">{house.country}</h5>
          <h2 className="col-12">{house.address}</h2>
          <h1 className="col-12 theme-font-color">{house.price}</h1>
        </div>
      </div>
    </div>
  )
}

export default House