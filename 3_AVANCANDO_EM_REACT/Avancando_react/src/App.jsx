import Fragment from './componnents/Fragment'
import './App.css'

import night from './assets/night.jpg'
import CarDetails from './componnents/CarDetails'
import ConditionalRender from './componnents/ConditionalRender'

import Data from './componnents/data'

import ListRender from './componnents/ListRender'
import ShowUserName from './componnents/ShowUserName'

// Renderização de lista com componente
const cars = [
  {id: 1, brand: 'Ferrari', color: 'azul', km: 0},
  {id: 2, brand: 'Audi', color: 'amarelo', km: 220},
  {id: 3, brand: 'Lamborguini', color: 'laranja', km: 110},
]

function App() {

  return (
    <>
      <h1>Avançando</h1>
      {/* inserir imagem em public */}
      <img src="/img.jpg" alt="" />
      {/* inserindo via assets após importação (via templateexpresion) */}
      <img src={night} alt="" />
      <Data />
      <Fragment />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name='Samuel'/>
      <CarDetails brand='Hyundai' km={50000} color='Cinza'/>
      {/* reaproveitamento com loop (map) */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
      ))}
    </>
  )
}
export default App
