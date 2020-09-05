import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BsChevronDown, BsX } from 'react-icons/bs'

import { SmallSidebarWrapper, Button } from '../../UI'
import Sidebar from './Sidebar'

function SmallSidebar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  if (!open)
    return (
      <Button className="d-flex" secondary onClick={() => setOpen(true)}>
        <BsChevronDown className="flex-grow-1" size={32} />
      </Button>
    )

  return (
    <SmallSidebarWrapper>
      <Button secondary className="mb-4" onClick={() => setOpen(false)}>
        <BsX size={32} />
      </Button>
      <Sidebar />
    </SmallSidebarWrapper>
  )
}

export default SmallSidebar
