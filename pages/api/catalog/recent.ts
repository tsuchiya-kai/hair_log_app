import type { NextApiRequest, NextApiResponse } from "next";
import { random } from "lib/utilityFunctions";

/**
 * TODO:
 * いったんフロントエンドの実装に集中したいので、サーバーは全てモックを返す
 */

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page } = req.query;
  if (Number(page) > 5) {
    setTimeout(() => {
      res.status(200).json({
        data: [],
        is_last_page: true,
        total_page: 5,
        current_page: Number(page),
      });
    }, 1000);

    return;
  }

  const data = [...(Array(30) as undefined[])].map((_, i) => {
    return {
      beautician_id: i + 1,
      beautician: "山田 太郎",
      thumbnail: `https://unsplash.it/${i + 1}00/100`,
      recent_posts: [...(Array(random(5)) as undefined[])].map((_) => {
        return {
          url: "https://unsplash.it/100/100",
          description: "投稿の説明文が入ります",
        };
      }),
    };
  });

  // 仮の値
  const resData: CatalogDataResponse = {
    data,
    is_last_page: false,
    total_page: 5,
    current_page: Number(page),
  };

  setTimeout(() => {
    res.status(200).json(resData);
  }, 1000);
}
