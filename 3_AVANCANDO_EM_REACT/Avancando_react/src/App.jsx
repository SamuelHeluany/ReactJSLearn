import Fragment from './componnents/Fragment'
import './App.css'

import night from './assets/night.jpg'
import CarDetails from './componnents/CarDetails'
import ConditionalRender from './componnents/ConditionalRender'

import Data from './componnents/data'

import ListRender from './componnents/ListRender'
import ShowUserName from './componnents/ShowUserName'
import Container from './componnents/Container'
import ExecuteFunction from './componnents/ExecuteFunction'

// Renderização de lista com componente
const cars = [
  {id: 1, brand: 'Ferrari', color: 'azul', km: 0},
  {id: 2, brand: 'Audi', color: 'amarelo', km: 220},
  {id: 3, brand: 'Lamborguini', color: 'laranja', km: 110},
]

function App() {

  function showMessage() {
    alert('Mensagem')
  }

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
      <Container>
        <p>teste do componente</p>
      </Container>
      <Container>
        <div>
          <h3>teste</h3>
          <p>oi</p>
        </div>
      </Container>
      <ExecuteFunction myFunction={showMessage}/>
    </>
  )
}
export default App
