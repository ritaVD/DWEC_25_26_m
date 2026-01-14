import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Padre } from './components/Padre'
import { Hijo } from './components/Hijo'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const [like, setLike] = useState('🩶');
  const [star, setStar] = useState('⭐');
//Obviamente esta no es la forma correacta

/*
  const countStars = () => {
    if (star === '⭐') {
      setStar('⭐⭐')
    }else if (star === '⭐⭐') {
      setStar('⭐⭐⭐')
    }else if (star === '⭐⭐⭐') {
      setStar('⭐⭐⭐⭐')

    }else if (star === '⭐⭐⭐⭐') {
      setStar('⭐⭐⭐⭐⭐')
    }else if (star === '⭐⭐⭐⭐⭐') {
      setStar('💫')
    }else if (star === '💫') {
      setStar('⭐')
    }
  }
*/
  //Esta si es 
  const countStars2 = () => {
    if (star === '💫') {
      setStar('⭐')
    return
    }

    const numStars = star.length

    if (numStars < 5) {
      setStar('⭐'.repeat(numStars + 1))
    } else {
      setStar('💫')
    }

  }



  const handleToggleLike = () => {
    if (like === '🩶') {
      setLike('❤️')
    } else {
      setLike('🩶')
    }
  }

  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <button onClick={handleToggleLike}>{like}

        </button>

        <button onClick={countStars2}>{star}
          
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Padre saludo = 'Hola_mundo' nombre= 'Pepe' edad ={25} datos = {{edad: 45, isRoot: false}}>
        <Hijo />
      </Padre>
      <Card src = 'https://pixabay.com/images/download/people-2944065_640.jpg?attachment'  texto =' es un texto '>

      </Card>
      <Card src = 'https://https://www.gstatic.com/webp/gallery3/1.sm.png.com/images/download/people-2944065_640.jpg?attachment'  texto =' es un texto '>

      </Card>
      
      
    </>
  )
}

export default App

