import { NextApiRequest, NextApiResponse } from 'next';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import {useState } from 'react';
import axios from 'axios';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { addresses, configHash } = req.body;

  if (!Array.isArray(addresses)) {
    return res.status(400).json({ error: 'Addresses must be an array' });
  }

  // Fetch the config from IPFS
  let config;
    try {
        const response = await axios.get(`https://ipfs.io/ipfs/${configHash}/config.js`);
        config = response.data;
      } catch (error) {
        return res.status(400).json({ error: 'Failed to fetch config from IPFS' });
      }
    // res.status(200).json(config);

  const client = new ApolloClient({
    uri: config.apiEndpoint,
    cache: new InMemoryCache(),
  });

  const results = [];

  for (const address of addresses) {
    try {
      const { data } = await client.query({
        query: gql(config.graphqlQuery.replace('$address', address)),
        variables: { address },
      });

      // if (config.checkFunction(data)) {
        results.push(config.graphqlQuery);
      // }
    } catch (error) {
      results.push({
        address,
        error: `Failed to query data for address: ${address}`,
      });
    }
  }
  res.status(200).json(results);
}
