/* 

Custom Hook

A hook is a normal function that does not return JSX.
A hook can use other hooks.


*/

import {useState, useEffect} from 'react';
import useGetRequest from './useGetRequest';

const useHouses = () => {
  const [houses, setHouses] = useState([]);
  const {get, loadingState} = useGetRequest("http://localhost:3001/houses");

  useEffect(() => {
    const fetchHouses = async () => {
      const houses = await get();
      setHouses(houses);
    };
    fetchHouses();
  }, [get])

  return {houses, setHouses, loadingState};
}

export default useHouses;