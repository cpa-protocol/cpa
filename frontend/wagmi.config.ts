import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import CampaignABI from './abi/Campaign.json'
import { erc20ABI } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

export default defineConfig({
  out: 'src/generated.ts',
    contracts: [
        {
            name: 'Campaign',
            abi: CampaignABI.abi,
        }
    ],
    plugins: [
        react(),
    ],
})
