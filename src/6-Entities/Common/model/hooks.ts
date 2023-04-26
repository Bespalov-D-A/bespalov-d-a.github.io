import { useMemo } from 'react';
import { InewTheme, mainTheme } from '../../../7-Shared/assets/mui/WithTheme';
import { useState } from 'react';

export const useMainTheme = (token: 'dark' | 'light'): InewTheme => {
  const theme = useMemo(() => {
    return mainTheme(token);
  }, [token]);

  return theme;
};

type IUseLoader = (...args: Iarguments) => Iresult;

type Iarguments = [
  errMsg: string,
  setAlert: (arg1: string, arg2: string) => void,
  callback: (...args: any[]) => any
];

type Iresult = [
  isFetch: (...args: any[]) => Promise<void>,
  isLoad: boolean,
  error: null | string
];

export const useLoader: IUseLoader = (errMsg, setAlert, callback): Iresult => {
  const [isLoad, setIsLoad] = useState(true);
  const [error, setError] = useState(null);

  const isFetch = async (...args: any[]) => {
    try {
      setIsLoad(true);
      setError(null);
      await callback(...args);
    } catch (e) {
      console.log(e);
      setAlert('error', errMsg);
    } finally {
      setIsLoad(false);
    }
  };

  return [isFetch, isLoad, error];
};
