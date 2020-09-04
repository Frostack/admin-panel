import React from 'react'
import styled from 'styled-components'
import { DetailRow } from '../../../UI'

const GrayText = styled.p`
  margin: 0;
  color: var(--gray-5);
  flex-basis: 30%;
  flex-shrink: 0;
`

function DetailItem({ label, value }) {
  return (
    <DetailRow>
      <GrayText>{label}</GrayText>
      <div>{value}</div>
    </DetailRow>
  )
}

export default DetailItem
