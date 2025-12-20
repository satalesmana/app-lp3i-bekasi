export function getTimeAgo(date: string) {
  if (!date) return "";

  const now = new Date();
  const postDate = new Date(date);

  // 🔥 handle invalid date
  if (isNaN(postDate.getTime())) {
    return "";
  }

  const diffMs = now.getTime() - postDate.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);

  if (diffSeconds < 5) return "baru saja";
  if (diffSeconds < 60) return `${diffSeconds} detik lalu`;

  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) return `${diffMinutes} menit lalu`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} jam lalu`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays} hari lalu`;

  // 🔥 fallback format tanggal
  return postDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
