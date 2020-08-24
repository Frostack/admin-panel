import useSWR from 'swr';

const useResource = id => {
  const { data, error } = useSWR(`/unknown/${id}`);
  return {
    resource: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useResource;
