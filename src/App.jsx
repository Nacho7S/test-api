import { RouterProvider } from 'react-router-dom'
import './App.css'
import { HomePages } from './pages/HomePages'
import { router } from './routes'




function App() {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
