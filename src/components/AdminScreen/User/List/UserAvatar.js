import React from 'react'

import useDeviceSize from '../../../../hooks/useDeviceSize'
import { AvatarWrapper, Avatar } from '../../../UI'

function UserAvatar({ avatar, name, isHeading }) {
  const deviceSize = useDeviceSize()
  if (!deviceSize.isSmall) return null

  return (
    <AvatarWrapper className="mr-md-3">
      {isHeading ? null : <Avatar src={avatar} alt={name} />}
    </AvatarWrapper>
  )
}

export default UserAvatar
