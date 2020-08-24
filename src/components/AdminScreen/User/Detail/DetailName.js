import React from 'react';
import { BoldText, DetailRow } from '../../../UI';

function DetailName({ name }) {
  return (
    <DetailRow>
      <BoldText className="mx-auto mb-4">{name}</BoldText>
    </DetailRow>
  );
}

export default DetailName;
