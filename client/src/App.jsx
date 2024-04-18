import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import DropdownListRoutes from './components/DropdownListRoutes'
import RouteInfoDisplay from './components/RouteInfoDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < NavBar />
      <main>
        <DropdownListRoutes />
        <RouteInfoDisplay />
      </main>
    </>
  )
}

export default App
