import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import User from './components/User/User'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Github from './components/Github/Github'
import Layout from './Layout'


// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout/>,
//     children : [
//       {
//         path : "",
//         element : <Home/>,
//       },
//       {
//         path : "about",
//         element : <About/>
//       },
//       {
//         path : "contact",
//         element : <Contact/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='id/:userid' element={<User/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    ></RouterProvider>
  </React.StrictMode>,
)
