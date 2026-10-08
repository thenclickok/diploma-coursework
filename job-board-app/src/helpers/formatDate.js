//this code is a ready-made helper function to access JavaScript's built-in internationalisation API Intl.RelativeTimeFormat

export default function formatRelativeTime(dateInput) {
  const timestamp = new Date(dateInput).getTime();
  const now = Date.now();
  const diffInSeconds = Math.round((timestamp - now) / 1000);

  // Less than 45 seconds ago
  if (Math.abs(diffInSeconds) < 45) {
    return "just now";
  }

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const cutoffs = [
    { unit: "year", seconds: 31536000 },
    { unit: "month", seconds: 2592000 },
    { unit: "day", seconds: 86400 },
    { unit: "hour", seconds: 3600 },
    { unit: "minute", seconds: 60 },
  ];

  for (const { unit, seconds } of cutoffs) {
    if (Math.abs(diffInSeconds) >= seconds) {
      const delta = Math.round(diffInSeconds / seconds);
      return rtf.format(delta, unit); // e.g. "5 minutes ago", "2 hours ago"
    }
  }

  return "just now";
}
