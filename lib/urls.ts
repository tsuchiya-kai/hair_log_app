const urls = {
  topPageUrl: "/", // トップページ
  aboutPageUrl: "/about", // ヘアログとは
  postPageUrl: "/post", // 投稿ページ
  catalogPageUrl: (beauticianId: number) => `beautician/${beauticianId}`, //美容師個人のカタログページ（美容師詳細ページ）
} as const;

export default urls;
