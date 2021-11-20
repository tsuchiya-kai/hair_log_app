import type { NextApiRequest, NextApiResponse } from "next";
import { randomNumber } from "lib/utilityFunctions";
/**
 * TODO:
 * いったんフロントエンドの実装に集中したいので、サーバーは全てモックを返す
 */

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1 } = req.query;
  // TODO: wordをスペースでsplitして、検索に使う

  if (Number(page) > 2) {
    res.status(404);
  }

  const randomPersonName = {
    1: "山本 耀司",
    2: "James Jebbia",
    3: "高田 賢三",
    4: "川久 保玲",
    5: "相澤 陽介",
  } as const;

  const randomThumbnailImagePath = {
    1: "https://storage.googleapis.com/hair-log-images/hair_ee340dcb-3f3b-e78b-6e61-1efc4fb5ccd4.png",
    2: "https://storage.googleapis.com/hair-log-images/hair_456a3033-70be-4956-3493-0281c29a05fa.png",
    3: "https://storage.googleapis.com/hair-log-images/hair_69824492-d9a2-cf0d-8d3a-55037852d3b7.png",
    4: "https://storage.googleapis.com/hair-log-images/hair_af75b2b8-42cc-bd95-2242-651aa2a639ce.png",
    5: "https://storage.googleapis.com/hair-log-images/hair_c52e4b5b-75bd-5173-996a-ca0df4247790.png",
    6: "https://storage.googleapis.com/hair-log-images/hair_c5c8c83d-9792-4a09-9a95-eff83aa7f1c9.png",
    7: "https://storage.googleapis.com/hair-log-images/hair_c52e4b5b-75bd-5173-996a-ca0df4247790.png",
    8: "https://storage.googleapis.com/hair-log-images/hair_b41163f9-22b9-a7c1-9988-17f03d458dc7.png",
    9: "https://storage.googleapis.com/hair-log-images/hair_af75b2b8-42cc-bd95-2242-651aa2a639ce.png",
    10: "https://storage.googleapis.com/hair-log-images/hair_767514fa-2e62-9998-93f2-c079b7841dcb.png",
  } as const;

  const data = [...(Array(randomNumber(15)) as undefined[])].map((_, i) => {
    return {
      beautician_id: i + 1,
      beautician: randomPersonName[randomNumber(5) as 1 | 2 | 3 | 4 | 5],
      thumbnail: randomThumbnailImagePath[randomNumber(5) as 1 | 2 | 3 | 4 | 5],
      recent_posts: [...(Array(randomNumber(5)) as undefined[])].map((_) => {
        return {
          url: randomThumbnailImagePath[
            randomNumber(10) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
          ],
          description: "投稿の説明文が入ります",
        };
      }),
    };
  });

  // 仮の値
  const resData: CatalogDataResponse = {
    data,
    is_last_page: data.length < 10,
    total_page: 2,
    current_page: Number(page),
  };

  // 一旦最大2ページまでにしておく
  if (Number(page) === 2) {
    setTimeout(() => {
      res.status(200).json({
        ...resData,
        is_last_page: true,
        current_page: 2,
      });
    }, 1000);

    return;
  }

  setTimeout(() => {
    res.status(200).json(resData);
  }, 1000);
}
