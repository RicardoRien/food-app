// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

/**
 * @description Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 * @param {object} _req request 
 * @param {string} res response
 */
export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
