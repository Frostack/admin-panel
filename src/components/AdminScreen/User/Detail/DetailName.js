import React from 'react'
import { BoldText, DetailRow } from '../../../common'

function DetailName({ name }) {
  return (
    <DetailRow>
      <BoldText className="mx-auto mb-4">{name}</BoldText>
    </DetailRow>
  )
}

export default DetailName
