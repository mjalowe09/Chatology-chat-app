import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage'
import ChatPage from './components/ChatPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div >
      <Routes>
        <Route path='/' element={<HomePage />} exact/> 
        <Route path='/chats' element={<ChatPage />}/> 
      </Routes>
     </div>
    </>
  )
}

export default App
