import React from 'react'

import { ResourceHeadingWrapper, CustomRowItem } from '../../../common'

function ResourceHeading() {
  return (
    <ResourceHeadingWrapper>
      <CustomRowItem>Name</CustomRowItem>
      <CustomRowItem>Year</CustomRowItem>
      <CustomRowItem>ID</CustomRowItem>
      <CustomRowItem>Color</CustomRowItem>
      <CustomRowItem>Pantone Value</CustomRowItem>
    </ResourceHeadingWrapper>
  )
}

export default ResourceHeading
