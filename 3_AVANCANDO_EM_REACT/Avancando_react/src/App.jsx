import './App.css'

import night from './assets/night.jpg'

import Data from './componnents/data'

import ListRender from './componnents/ListRender'

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
    </>
  )
}
export default App
