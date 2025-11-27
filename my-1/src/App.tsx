import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>

      <div className="grid grid-cols-4 gap-4">

        <div className="hover:bg-gray-200">%</div>
        <div className="hover:bg-gray-200">CE</div>
        <div className="hover:bg-gray-200">C</div>
        <div className="hover:bg-gray-200">X</div>

        <div className="hover:bg-gray-200">1/x</div>
        <div className="hover:bg-gray-200">x2</div>
        <div className="hover:bg-gray-200">2/x</div>
        <div className="hover:bg-gray-200">/</div>

        <div className="hover:bg-gray-200">7</div>
        <div className="hover:bg-gray-200">8</div>
        <div className="hover:bg-gray-200">9</div>
        <div className="hover:bg-gray-200">*</div>

        <div className="hover:bg-gray-200">4</div>
        <div className="hover:bg-gray-200">5</div>
        <div className="hover:bg-gray-200">6</div>
        <div className="hover:bg-gray-200">-</div>

        <div className="hover:bg-gray-200">1</div>
        <div className="hover:bg-gray-200">2</div>
        <div className="hover:bg-gray-200">3</div>
        <div className="hover:bg-gray-200">+</div>

        <div className="hover:bg-gray-200">+/-</div>
        <div className="hover:bg-gray-200">0</div>
        <div className="hover:bg-gray-200">.</div>
        <div className="bg-blue-50 hover:bg-gray-200">=</div>
      </div>

    </Layout>
  )
}

export default App
