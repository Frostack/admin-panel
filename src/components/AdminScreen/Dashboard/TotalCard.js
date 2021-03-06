import React from 'react'

import { TotalCardWrapper } from '../../common'
import useTotal from '../../../hooks/useTotal'
import Progress from '../../common/Progress'
import RequestError from '../../common/RequestError'
import Loading from '../../common/Loading'

function TotalCard({ icon, caption, color, reqPath }) {
  const { total, isLoading, error } = useTotal(reqPath)

  if (error) return <RequestError />
  if (isLoading) return <Loading />

  return (
    <TotalCardWrapper color={color}>
      <div className="d-flex justify-content-between mb-3 font-weight-bold align-items-center">
        <div>{total}</div>
        {icon}
      </div>

      <Progress height={4} color="var(--white)" current={total} />

      <div className="d-flex justify-content-between mt-3">
        <div>Total {caption}</div>
        <div>{total}</div>
      </div>
    </TotalCardWrapper>
  )
}

export default TotalCard
