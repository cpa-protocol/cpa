//@ts-nocheck
import { NextApiRequest, NextApiResponse } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import axios from "axios";
import * as vm from "vm";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { addresses, configHash } = req.body;

  if (!Array.isArray(addresses)) {
    return res.status(400).json({ error: "Addresses must be an array" });
  }

  // Fetch the config from IPFS
  let config;
  try {
    const response = await axios.get(
      `https://ipfs.io/ipfs/bafybeibsnbhomblnce3umj6rnn32dtvcpmcptklcn74pf4r5phdxm6e7te/config.js`,
    );

    // Create a sandboxed environment to safely evaluate the JS content
      const sandbox = {
                module: {
                    exports: {
                        apiEndpoint: "",
                        graphqlQuery: "",
                        checkFunction: (data: `0x${string}`) => {}
                    }
      }
      };
    vm.createContext(sandbox);
    vm.runInContext(response.data, sandbox);

    // Access the evaluated config object
    config = sandbox.module.exports;

    console.log(config.apiEndpoint);

  } catch (error) {
      console.log(`config is ${config}`);
      console.log(error);
    return res.status(400).json({ error: "Failed to fetch config from IPFS" });
  }

  const client = new ApolloClient({
    uri: config.apiEndpoint,
    cache: new InMemoryCache(),
  });

  const results = [];

  for (const address of addresses) {
    try {
      console.log(`address is ${address}`);
      console.log(config.graphqlQuery.replace("$address", address));
      const { data } = await client.query({
        query: gql(`{${config.graphqlQuery.replace("$address", address)}}`),
        variables: { address },
      });
        const checkResult = config.checkFunction(data);
        console.log(data);
        console.log(checkResult);

      if (config.checkFunction(data)) {
          results.push(address);
      }
    } catch (error) {
      results.push({
        address,
        error: `Failed to query data for address: ${address}`,
      });
    }
  }
  res.status(200).json(results);
}
