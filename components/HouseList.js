import HouseRow from './HouseRow';
import {useEffect, useState} from 'react';

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  const addHouse = (house) => {
    setHouses(prev => [...prev, house]);
  }

  useEffect(() => {
    fetch("http://localhost:3001/houses")
      .then(res => res.json())
      .then(data => setHouses(data));
  }, [])

  return <>
    <div className="row mb-2">
      <h5 className="theme-font-color text-center">Houses Currently on the market</h5>
    </div>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Address</th>
          <th>Country</th>
          <th>Asking Price</th>
        </tr>
      </thead>
      <tbody>
        {houses.map(house => <HouseRow key={house.id} {...house} />)}
      </tbody>
    </table>
    <button onClick={() => addHouse({id:3, address: "Slagstavägen 2", country: "Sweden", price: 10000})} className="btn btn-primary">Add house</button>
  </>
}

export default HouseList;