import Banner from './Banner';
import HouseList from './HouseList';
import House from './House';
import { useState } from 'react';

const App = () => {
  const [selectedHouse, setSelectedHouse] = useState();

  const setSelectedHouseWrapper = (house) => {
    if(!house)
      return;
    setSelectedHouse(house);
  } 

  return <>
    <Banner subtitleText={"Providing Houses all over the world"} />
    {!selectedHouse && <HouseList handleSelectedHouse={setSelectedHouseWrapper} />}
    {selectedHouse && <House house={selectedHouse} />}
  </>
}

export default App;