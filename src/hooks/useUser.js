import useSWR from 'swr';

const useUser = id => {
  const { data, error } = useSWR(`/users/${id}`);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useUser;
