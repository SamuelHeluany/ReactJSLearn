import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const haveColorRed = true
  return (
    <>
     {/* CSS Global */}
     <h1>CSS no react</h1>
     <MyComponent />
     <h2 className={ haveColorRed ? 'red-color' : 'title'}>
      teste classe dinamica
     </h2>
     <Title />
    </>
  )
}

export default App
