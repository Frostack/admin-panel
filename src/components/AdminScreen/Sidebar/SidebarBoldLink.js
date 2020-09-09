import React from 'react'
import { Link } from 'react-router-dom'

import { BoldText } from '../../common'

function SidebarBoldLink({ children, to }) {
  return (
    <Link
      to={to}
      style={{
        textDecoration: 'none',
      }}
    >
      <BoldText>{children}</BoldText>
    </Link>
  )
}

export default SidebarBoldLink
