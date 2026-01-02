import { Suspense, useEffect, useState } from "react";

interface DelayedSuspenseProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
  minDuration?: number;
}

export function DelayedSuspense({
  children,
  fallback,
  minDuration = 800,
}: DelayedSuspenseProps) {
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowFallback(false), minDuration);
    return () => clearTimeout(timer);
  }, [minDuration]);

  return (
    <Suspense fallback={fallback}>
      {showFallback ? fallback : children}
    </Suspense>
  );
}
