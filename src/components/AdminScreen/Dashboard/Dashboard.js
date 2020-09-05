import React from 'react'
import { BsPersonFill, BsLayersFill } from 'react-icons/bs'

import TotalCard from './TotalCard'

function Dashboard() {
  return (
    <div className="my-4 d-flex flex-column align-items-center">
      <TotalCard
        reqPath="/users"
        icon={<BsPersonFill size={24} />}
        caption="Users"
        color="var(--blue-2)"
      />
      <TotalCard
        reqPath="/unknown"
        icon={<BsLayersFill size={24} />}
        caption="Resources"
        color="var(--green-2)"
      />
    </div>
  )
}

export default Dashboard
