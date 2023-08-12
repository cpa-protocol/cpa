import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
  cache: new InMemoryCache(),
});


function checkData(data: any) {
  if (data.swaps && data.swaps.length >= 1) {
    return 1;
  }
  return 0;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { addresses } = req.body;

  if (!Array.isArray(addresses)) {
    return res.status(400).json({ error: 'Addresses must be an array' });
  }

  const results = [];

  for (const address of addresses) {
    try {
      const { data } = await client.query({
        query: gql(`
            {
            swaps(orderBy: timestamp, orderDirection: desc, where:
             { sender: "${address}" }
            ) {
              transaction {
                id
              }
             }
            }
        `),
      });
        if (checkData(data)) {
          results.push( address);
        }
    } catch (error) {
      results.push({
        address,
        error,
        error: `
          {
            swaps(orderBy: timestamp, orderDirection: desc, where: { sender: "${address}" }) {
              transaction {
                id
              }
            }
          }
        `,
      });
    }
  }
  res.status(200).json(results);
}


