import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    fullName: 'John Doe',
    phone: '123456789',
    instagram: '@johndoe',
  });
}
