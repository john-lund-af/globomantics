import currencyFormatter from '@/helpers/currencyFormatter'

const HouseRow = ({handleSelectedHouse, house})  => {
  const {address, country, price} = house;
  return <tr onClick={() => handleSelectedHouse(house)}>
          <td>{address}</td>
          <td>{country}</td>
          <td>{currencyFormatter.format(price)}</td>
  </tr>
}

export default HouseRow