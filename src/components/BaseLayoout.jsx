import React from 'react'
import { Navbars } from './Navbars'
import { Outlet } from 'react-router-dom'

export const BaseLayoout = () => {
  return (
    <>
      <Navbars />
      <Outlet/>
    </>
  )
}
