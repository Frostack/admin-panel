import React from 'react'

import { UserListWrapper, ListWrapper } from '../../../common'
import useList from '../../../../hooks/useList'
import UserHeading from './UserHeading'
import UserItem from './UserItem'
import Pagination from '../../../common/Pagination'
import Loading from '../../../common/Loading'
import RequestError from '../../../common/RequestError'

function UserList() {
  const { items, error, isLoading, page, setPage, totalPages } = useList('users')

  if (error) return <RequestError />
  if (isLoading) return <Loading />

  const renderList = () => {
    return items.map(user => (
      <UserItem
        key={user.id}
        avatar={user.avatar}
        email={user.email}
        name={`${user.first_name} ${user.last_name}`}
        id={user.id}
      />
    ))
  }

  return (
    <UserListWrapper className="px-1 px-md-5 py-4 d-flex flex-column">
      <h2 className="font-weight-bold mb-3">Users</h2>
      <UserHeading />
      <ListWrapper>{renderList()}</ListWrapper>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </UserListWrapper>
  )
}

export default UserList
