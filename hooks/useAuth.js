// hooks/useAuth.js
"use client";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("user");
      setUser(stored ? JSON.parse(stored) : null);
      setLoading(false);
    }
  }, []);

  return { user, loading };
};
