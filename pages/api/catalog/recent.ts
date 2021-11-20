import type { NextApiRequest, NextApiResponse } from "next";
import { randomNumber } from "lib/utilityFunctions";

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

  const randomPersonName = {
    1: "山本 耀司",
    2: "James Jebbia",
    3: "高田 賢三",
    4: "川久 保玲",
    5: "相澤 陽介",
  } as const;

  const data = [...(Array(30) as undefined[])].map((_, i) => {
    return {
      beautician_id: i + 1,
      beautician: randomPersonName[randomNumber(5) as 1 | 2 | 3 | 4 | 5],
      thumbnail: `https://unsplash.it/${i + 1}00/100`,
      recent_posts: [...(Array(randomNumber(5)) as undefined[])].map((_) => {
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
