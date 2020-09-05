import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import authImage from '../../assets/auth.jpg'
import useDeviceSize from '../../hooks/useDeviceSize'
import { Image, ErrorText, AuthColumn } from '../UI'
import AuthForm from './AuthForm'

function AuthScreen({ title, error, isLoading, onSubmit, authLinkComponent }) {
  const deviceSize = useDeviceSize()

  return (
    <Row className="vh-100" noGutters>
      <AuthColumn>
        <h1 className="display-4">{title}</h1>
        <AuthForm onSubmit={onSubmit} isLoading={isLoading} title={title} />
        {authLinkComponent}
        <ErrorText className="mt-4">{error}</ErrorText>
      </AuthColumn>

      {deviceSize.isLarge ? (
        <Col>
          <Image src={authImage} />
        </Col>
      ) : null}
    </Row>
  )
}
export default AuthScreen
