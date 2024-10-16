import HouseRow from './HouseRow';
// import {useEffect, useState} from 'react';
import Button from './Button';
import useHouses from '@/hooks/useHouses';

const HouseList = ({handleSelectedHouse}) => {

  const [houses, setHouses] = useHouses();

  const addHouse = async (house) => {
    fetch("http://localhost:3001/houses", {
      method: "POST",
      body: JSON.stringify(house)
    })
    .then(res => res.json())
    .then(data => setHouses(prev => [...prev, data]))
    .catch(err => console.err(err.name, err.message));

  }

  const onAddHouse = () => {
    const houseToAdd = {id:6, address: "Slagstavägen 2", country: "Sweden", price: 10000};
    addHouse(houseToAdd);
  }

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
        {houses.map(house => <HouseRow handleSelectedHouse={handleSelectedHouse} key={house.id} house={house} />)}
      </tbody>
    </table>
    <Button caption="Add house" handleClick={onAddHouse} />
  </>
}

export default HouseList;