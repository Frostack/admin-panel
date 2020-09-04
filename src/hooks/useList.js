import { useState } from 'react'
import useSWR from 'swr'

function useList(reqItem) {
  const [page, setPage] = useState(1)
  const { data, error } = useSWR(`/${reqItem}?per_page=8&page=${page}`)

  return {
    items: data?.data,
    isLoading: !error && !data,
    error,
    page,
    setPage,
    totalPages: data?.total_pages,
  }
}

export default useList
