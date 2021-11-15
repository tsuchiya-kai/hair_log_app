import type { NextApiRequest, NextApiResponse } from "next";
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
    return { url: `https://unsplash.it/${i + 1}00/100` };
  });

  // 仮の値
  const resData: RecentResponseData = {
    data,
    is_last_page: false,
    total_page: 5,
    current_page: Number(page),
  };

  setTimeout(() => {
    res.status(200).json(resData);
  }, 1000);
}
