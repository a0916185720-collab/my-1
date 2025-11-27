import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'

function App() {

  const calclist = [
    "%", "CE", "C", "X",
    "1/x", "x2", "2/x", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "+/-", "0", "-", "=",
];

  const [count, setCount] = useState(0)

  return (

    <Layout>

      <div className="grid grid-cols-4 gap-4">
          {calclist.map((calc, index) => (
            <div key={index} className="border p-4 text-center hover:bg-gray-200">
              {calc}  
            </div>
          ))}
      </div>

    </Layout>
  )
}

export default App
