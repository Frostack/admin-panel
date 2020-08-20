import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import authImage from '../../assets/auth.jpg';
import { Input, Button, SmallText, TextButton, Image } from '../UI';

const CustomInput = styled(Input)`
  width: 50%;
`;

const CustomButton = styled(Button)`
  font-size: large;
`;

const AuthColumn = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function AuthScreen({ title, alternative }) {
  return (
    <Row className="vh-100" noGutters>
      <AuthColumn>
        <h1 className="display-4">Sign Up</h1>
        <CustomInput className="mt-5" placeholder="Email" />
        <CustomInput className="mt-3" placeholder="Password" />
        <CustomButton className="px-5 py-2 mt-4 mb-5">Sign Up</CustomButton>
        <SmallText>
          Already have an account? <TextButton>Login</TextButton> now!
        </SmallText>
      </AuthColumn>
      <Col>
        <Image src={authImage} />
      </Col>
    </Row>
  );
}

export default AuthScreen;
