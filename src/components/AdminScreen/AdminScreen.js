import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import useDeviceSize from '../../hooks/useDeviceSize'
import { AdminScreenWrapper } from '../UI'
import Sidebar from './Sidebar/Sidebar'
import SmallSidebar from './Sidebar/SmallSidebar'
import Dashboard from './Dashboard/Dashboard'
import UserList from './User/List/UserList'
import UserDetail from './User/Detail/UserDetail'
import ResourceList from './Resource/List/ResourceList'
import ResourceDetail from './Resource/Detail/ResourceDetail'
import UserCreate from './User/UserCreate'

function AdminScreen() {
  const deviceSize = useDeviceSize()

  return (
    <AdminScreenWrapper>
      <div className="d-flex flex-column">
        {!deviceSize.isExtraLarge ? <SmallSidebar /> : null}
        <Row noGutters>
          {deviceSize.isExtraLarge ? <Sidebar /> : null}
          <Switch>
            <Route path="/admin/dashboard">
              <DashboardRoute />
            </Route>

            <Route path="/admin/user/list">
              <UserListRoute />
            </Route>

            <Route path="/admin/user/new">
              <CreateUserRoute />
            </Route>

            <Route path="/admin/resource/list">
              <ResourceListRoute />
            </Route>
          </Switch>
        </Row>
      </div>
    </AdminScreenWrapper>
  )
}

function DashboardRoute() {
  return (
    <Col>
      <Dashboard />
    </Col>
  )
}

function UserListRoute() {
  return (
    <>
      <Col>
        <UserList />
      </Col>
      <Col md="12" lg="3" className="mt-4 mt-md-0">
        <UserDetail />
      </Col>
    </>
  )
}

function CreateUserRoute() {
  return (
    <Col>
      <UserCreate />
    </Col>
  )
}

function ResourceListRoute() {
  return (
    <>
      <Col>
        <ResourceList />
      </Col>
      <Col xs="12" md="3">
        <ResourceDetail />
      </Col>
    </>
  )
}

export default AdminScreen
