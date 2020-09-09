import React from 'react'

import useList from '../../../../hooks/useList'
import ResourceItem from './ResourceItem'
import Pagination from '../../../common/Pagination'
import Loading from '../../../common/Loading'
import ResourceHeading from './ResourceHeading'
import RequestError from '../../../common/RequestError'
import { ResourceListListWrapper, ResourceListWrapper } from '../../../common'

function UserList() {
  const { items, error, isLoading, page, setPage, totalPages } = useList('unknown')

  if (error) return <RequestError />
  if (isLoading) return <Loading />

  const renderList = () => {
    return items.map(resource => (
      <ResourceItem
        key={resource.id}
        name={resource.name}
        id={resource.id}
        color={resource.color}
        pantone={resource.pantone_value}
        year={resource.year}
      />
    ))
  }

  return (
    <ResourceListWrapper className="px-sm-5 py-4 d-flex flex-column">
      <h2 className="font-weight-bold mb-3">Resources</h2>
      <ResourceHeading />
      <ResourceListListWrapper>{renderList()}</ResourceListListWrapper>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </ResourceListWrapper>
  )
}

export default UserList
