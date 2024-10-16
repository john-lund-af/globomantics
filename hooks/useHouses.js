/* 

Custom Hook

A hook is a normal function that does not return JSX.
A hook can use other hooks.


*/

import loadingStatus from '@/helpers/loadingStatus';
import {useState, useEffect} from 'react';

const useHouses = () => {
  const [houses, setHouses] = useState([]);
  const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

  useEffect(() => {
    fetch("http://localhost:3001/houses")
      .then(res => res.json())
      .then(data => {
        setHouses(data);
        setLoadingState(loadingStatus.loaded);
      })
      .catch(err => {
        console.error(err.name, err.message);
        setLoadingState(loadingStatus.hasErrored);
      })
  }, [])

  return {houses, setHouses, loadingState};
}

export default useHouses;