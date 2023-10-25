import { AxiosInstance } from "axios";
import { useEffect, useState } from "react";
import { Country } from "../pages/Home/CountriesList";

type HookParams = {
  axiosInstance: AxiosInstance;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  url: string;
};

const useAxios = ({ axiosInstance, method, url }: HookParams) => {
  const [response, setResponse] = useState<Country[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<null | string>(null);
  const [reload, setReload] = useState(0);

  const refetch = () => setReload((prev) => prev + 1);

  useEffect(() => {
    const controller = new AbortController();

    const fetch = (async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.request({
          method,
          url,
          signal: controller.signal,
        });
        setResponse(res.data);
      } catch (error: any) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => controller.abort();
  }, [reload]);

  return { response, isLoading, refetch, isError };
};

export default useAxios;
