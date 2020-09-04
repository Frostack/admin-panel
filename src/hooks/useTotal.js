import useSWR from 'swr'

const useTotal = reqPath => {
  const { data, error } = useSWR(reqPath)
  return {
    total: data?.total,
    isLoading: !error && !data,
    error,
  }
}

export default useTotal
