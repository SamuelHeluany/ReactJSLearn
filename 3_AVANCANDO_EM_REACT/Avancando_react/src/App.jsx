import './App.css'

import night from './assets/night.jpg'
import CarDetails from './componnents/CarDetails'
import ConditionalRender from './componnents/ConditionalRender'

import Data from './componnents/data'

import ListRender from './componnents/ListRender'
import ShowUserName from './componnents/ShowUserName'

function App() {

  return (
    <>
      <h1>Avançando</h1>
      {/* inserir imagem em public */}
      <img src="/img.jpg" alt="" />
      {/* inserindo via assets após importação (via templateexpresion) */}
      <img src={night} alt="" />
      <Data />
      
      <ListRender />
      <ConditionalRender />
      <ShowUserName name='Samuel'/>
      <CarDetails brand='Hyundai' km={50000} color='Cinza'/>
    </>
  )
}
export default App
