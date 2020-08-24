import React from 'react';

import { RowItem, GrayText, ModalFieldCustomInput } from '../../../UI';

function ModalField({ name, label }) {
  return (
    <RowItem>
      <GrayText>{label}</GrayText>
      <ModalFieldCustomInput name={name} />
    </RowItem>
  );
}

export default ModalField;
