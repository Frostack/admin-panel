import React from 'react'
import { BsPersonFill, BsLayersFill, BsBarChartFill } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'

import { BoldText, SidebarWrapper, ExitButton } from '../../common'
import SidebarLink from './SidebarLink'
import SidebarBoldLink from './SidebarBoldLink'

function Sidebar() {
  const history = useHistory()

  const onExitClick = () => {
    Cookies.remove('token')
    history.push('/')
  }

  return (
    <SidebarWrapper>
      <SidebarBoldLink to="/admin/dashboard">
        <BsBarChartFill className="mr-3" />
        Dashboard
      </SidebarBoldLink>

      <BoldText>
        <BsPersonFill className="mr-3" />
        User
      </BoldText>
      <SidebarLink to="/admin/user/list">List</SidebarLink>
      <SidebarLink to="/admin/user/new">Create New User</SidebarLink>

      <BoldText className="mt-4">
        <BsLayersFill className="mr-3" />
        Resource
      </BoldText>
      <SidebarLink to="/admin/resource/list">List</SidebarLink>
      <ExitButton onClick={onExitClick}>Logout</ExitButton>
    </SidebarWrapper>
  )
}

export default Sidebar
