import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const useAsyncStorageScrolled = (key: string) => {
  const { getItem, setItem } = useAsyncStorage(key);
  const [hasScrolled, setHasScrolled] = useState(false);

  const writeItemToStorage = async (v: string) => {
    await setItem(v);
  };

  useEffect(() => {
    const readLocalStorage = async () => {
      const result = await getItem();
      setHasScrolled(result ? true : false);
    };
    readLocalStorage();
  }, [getItem]);

  return [hasScrolled, writeItemToStorage] as const;
};

export default useAsyncStorageScrolled;
