// @ts-nocheck
import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import NFTABI from "@/abi/NFT";
import CPAABI from "@/abi/NFT";
import { erc20ABI } from "wagmi";
import { 
  // optimism,
  optimismGoerli,
  // base,
  baseGoerli,
  // zora,
  zoraTestnet,
} from "wagmi/chains";

export default defineConfig({
  out: "src/generated.ts",
  contracts: [
    {
      name: "cpa",
      abi: CPAABI,
      address: {
          [optimismGoerli.id]: '0x8cAf9989e73491b60a923a0eB3Ce1436A4604752',
          [baseGoerli.id]: '0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5',
      },
    },
    {
      name: "nft",
      abi: NFTABI,
      address: {
          [optimismGoerli.id]: '0x9e55B1C55Bb47fc58Badab6610B3445101c051dC',
          [baseGoerli.id]: '0x47625465f936920Efa00e33391125fCcfA106d84',
      },
    },
  ],
    plugins: [react({
        usePrepareContractFunctionWrite: true,
    })],
});
