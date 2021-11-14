// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// https://zenn.dev/eitches/articles/2021-0719-api-routes-http-request-type#next.js%E5%85%AC%E5%BC%8F%E3%81%AEtypescript%E3%83%9A%E3%83%BC%E3%82%B8%E3%82%92%E8%A6%8B%E3%82%8B
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
}
