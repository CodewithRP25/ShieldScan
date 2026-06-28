import { useEffect, useState } from "react";
import { healthService } from "../services/healthService.js";

export function useApiHealth() {
  const [health, setHealth] = useState({ loading: true, data: null, error: null });

  useEffect(() => {
    let isMounted = true;

    healthService
      .getHealth()
      .then((data) => {
        if (isMounted) {
          setHealth({ loading: false, data, error: null });
        }
      })
      .catch((error) => {
        if (isMounted) {
          setHealth({ loading: false, data: null, error });
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return health;
}
