/* 

Custom Hook

A hook is a normal function that does not return JSX.
A hook can use other hooks.


*/

import {useState, useEffect} from 'react';

const useHouses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/houses")
      .then(res => res.json())
      .then(data => setHouses(data));
  }, [])

  return [houses, setHouses];
}

export default useHouses;