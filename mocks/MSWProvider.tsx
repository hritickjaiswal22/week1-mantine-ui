// src/mocks/MSWProvider.tsx
"use client";

import { useEffect, useState } from "react";

export function MSWProvider({ children }: { children: React.ReactNode }) {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (
        typeof window !== "undefined" &&
        process.env.NODE_ENV === "development"
      ) {
        const { worker } = await import("./browser");
        await worker.start({
          onUnhandledRequest: "bypass",
        });
        setMswReady(true);
      }
    };

    init();
  }, []);

  if (!mswReady && process.env.NODE_ENV === "development") {
    return null; // Or a Mantine Loader/Skeleton
  }

  return <>{children}</>;
}
