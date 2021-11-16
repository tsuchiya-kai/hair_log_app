type CatalogData = {
  url: string;
};

type CatalogDataResponse = {
  data: CatalogData[];
  is_last_page: boolean; // 最後のページかどうか
  total_page: number; // 総ページ数
  current_page?: number;
};
