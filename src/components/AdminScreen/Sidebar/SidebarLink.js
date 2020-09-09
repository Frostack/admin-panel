import React from 'react'
import { useLocation, Link } from 'react-router-dom'

import { LightText } from '../../common'

function SidebarLink({ children, to }) {
  const { pathname } = useLocation()

  return (
    <Link style={{ textDecoration: 'none' }} to={to}>
      <LightText selected={pathname === to}>{children}</LightText>
    </Link>
  )
}

export default SidebarLink
