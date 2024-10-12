import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import User from './components/getUser/User'
import Add from './components/addUser/Add'

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element:<User/>
    },
    {
      path:"/add",
      element:<Add/>
    },
    {
      path:"/edit",
      element:"Update user page"
    }
  ])
  return(
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App
