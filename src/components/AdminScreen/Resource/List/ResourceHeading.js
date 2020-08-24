import React from 'react';

import { ElementWrapper, RowActions, InfoRowHeading } from '../../../UI';
import { CustomRowItem } from '../../../UI';

function ResourceHeading() {
  return (
    <ElementWrapper>
      <InfoRowHeading>
        <CustomRowItem>Name</CustomRowItem>
        <CustomRowItem>Year</CustomRowItem>
        <CustomRowItem>ID</CustomRowItem>
        <CustomRowItem>Color</CustomRowItem>
        <CustomRowItem>Pantone Value</CustomRowItem>
        <RowActions></RowActions>
      </InfoRowHeading>
    </ElementWrapper>
  );
}

export default ResourceHeading;
