import { useState } from 'react'
import './App.scss'
import Home from './Pages/Home/Home'
import Nav from './Components/Nav/Nav'
import Content from './Pages/Content/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <Home />
      <Content />
    </div>
  )
}

export default App;
