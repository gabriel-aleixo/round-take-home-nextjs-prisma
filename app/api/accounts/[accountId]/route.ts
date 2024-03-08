
import { NextApiRequest, NextApiResponse } from 'next';
import { DB } from '@/app/db';

// Account endpoint (replace with separate files for each table if needed)
export async function getAccounts(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      const accounts = await DB.account.findMany({
        include: {
          accountNames: true,
          accountBalances: true,
          accountIdentifications: true,
        },
      });
      return res.status(200).json(accounts);
    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  }