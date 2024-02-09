import { useSearchParams, useNavigate } from 'react-router-dom';

type URLParams = { [key: string]: string | string[] };

const useURLParams = <T extends URLParams>() => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const objectToQueryString = (paramsObject: Partial<T>): string => {
    const queryString = new URLSearchParams();
    for (const param in paramsObject) {
      const value = paramsObject[param];
      if (Array.isArray(value)) {
        const distinctValues = Array.from(new Set(value));
        distinctValues.forEach((paramValue) => {
          queryString.append(param, paramValue);
        });
      } else if (value) {
        // If the value is a single string, treat it as a list with one value
        queryString.append(param, value);
      }
    }
    return queryString.toString();
  };

  const queryStringToObject = (): T => {
    const paramsObject: T = {} as T;
    const paramsArray = Array.from(searchParams); // Convert to array first

    for (const [param, value] of paramsArray) {
      const paramKey = param as keyof T;
      if (Array.isArray(paramsObject[paramKey])) {
        // If the paramKey already exists as an array, add the value only if it's not already present
        if (!paramsObject[paramKey].includes(value)) {
          (paramsObject[paramKey] as string[]).push(value);
        }
      } else {
        // For single values, store the value in an array with one element
        paramsObject[paramKey] = [value] as T[Extract<keyof T, string>]; // Type assertion here
      }
    }

    return paramsObject;
  };

  const updateURLParams = (paramsObject: Partial<T>) => {
    // Get the current URL parameters
    const currentParams = queryStringToObject();

    // Merge the current URL parameters with the new ones
    const mergedParams = { ...currentParams, ...paramsObject };

    // Remove any parameters with a value of undefined
    for (const key in mergedParams) {
      if (mergedParams[key] === undefined) {
        delete mergedParams[key];
      }
    }

    // Convert the merged parameters to a query string
    const queryString = objectToQueryString(mergedParams);

    // Update the URL with the new parameters
    navigate({ search: `?${queryString}` });
  };

  return { updateURLParams, queryStringToObject };
};

export default useURLParams;
