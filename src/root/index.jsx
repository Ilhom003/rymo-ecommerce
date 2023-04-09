import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import NotFound from '../components/Not Found'
import { navbar } from '../utils/navbar'



const Root = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Navbar />}>

          {
            navbar?.map(navlink => navlink?.isPrivate && (
              <Route key={navlink?.id} path={navlink?.path} element={localStorage.getItem('token') ? navlink.element : <Navigate to='/signin' />} />

            ))
          }
          {
            navbar?.map(navlink => !navlink?.isPrivate && (
              <Route key={navlink?.id} path={navlink?.path} element={navlink.element} />

            ))
          }
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>


    </div>
  )
}

export default Root