export const formatDate = (dateString: string | null): string => {
  if (!dateString) return "";

  const date: Date = new Date(dateString);

  if (isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const formatTime = (dateString: string | null): string => {
  if (!dateString) return "";

  const date: Date = new Date(dateString);

  if (isNaN(date.getTime())) return "";

  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatRelativeTime = (
  dateString: string | null | undefined,
): string => {
  if (!dateString) return "";

  const published: Date = new Date(dateString);

  if (isNaN(published.getTime())) return "";

  const now: Date = new Date();

  const diffInSeconds: number = Math.floor(
    (now.getTime() - published.getTime()) / 1000,
  );

  const rtf: Intl.RelativeTimeFormat = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });

  const absDiff = Math.abs(diffInSeconds);

  if (absDiff < 60) {
    return rtf.format(-diffInSeconds, "second");
  }

  if (absDiff < 3600) {
    const minutes: number = Math.floor(diffInSeconds / 60);
    return rtf.format(-minutes, "minute");
  }

  if (absDiff < 86400) {
    const hours: number = Math.floor(diffInSeconds / 3600);
    return rtf.format(-hours, "hour");
  }

  const days: number = Math.floor(diffInSeconds / 86400);
  return rtf.format(-days, "day");
};
