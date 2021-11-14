import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  const data = [...(Array(30) as undefined[])].map((_, i) => {
    return { url: `https://unsplash.it/${i + 1}00/100` };
  });
  res.status(200).json(data);
}
