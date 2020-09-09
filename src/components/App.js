import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { SWRConfig } from 'swr'

import api from '../apis/reqres'
import ProtectedRoute from './common/ProtectedRoute'
import RegisterScreen from './AuthScreen/RegisterScreen'
import LoginScreen from './AuthScreen/LoginScreen'
import AdminScreen from './AdminScreen/AdminScreen'
import AlertModal from './common/AlertModal'
import UserEditModal from './AdminScreen/User/Modal/UserEditModal'

function App() {
  const swrConfig = {
    fetcher: url => api.get(url).then(res => res.data),
  }

  return (
    <SWRConfig value={swrConfig}>
      <Router>
        <Switch>
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={LoginScreen} />
          <ProtectedRoute path="/admin" component={AdminScreen} />
          <Redirect to="/login" />
        </Switch>

        <AlertModal />
        <UserEditModal />
      </Router>
    </SWRConfig>
  )
}

export default App
