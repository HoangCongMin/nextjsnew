import useSWR from 'swr';
import http from '@/app/utils/http';



const fetcher = (url:string) => http.get(url).then((res) => res.data);

export function useFetchData(url:string) {
  const { data, error } = useSWR(url, fetcher);




  return {
    data,
    isLoading: !data && !error,
    error,
  };
}