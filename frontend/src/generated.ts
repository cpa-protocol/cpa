// Generated by @wagmi/cli@1.3.0 on 9/5/2023 at 1:07:58 AM
import {
  useNetwork,
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  Address,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// cpa
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x8cAf9989e73491b60a923a0eB3Ce1436A4604752)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5)
 */
export const cpaABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: '_cpa', internalType: 'address', type: 'address' }],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'campaignId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CreateToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'nftContract',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CreateZoraContract',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'influencer', internalType: 'address', type: 'address' },
      { name: 'campaignId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnerSet',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'campaignId', internalType: 'uint256', type: 'uint256' },
      { name: 'campaignName', internalType: 'string', type: 'string' },
      { name: 'contractURI', internalType: 'string', type: 'string' },
    ],
    name: 'setUpNFT',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'campaignFactory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'influencersNftContract',
    outputs: [
      { name: 'campaignId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'zora', internalType: 'address', type: 'address' },
    ],
  },
] as const

/**
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x8cAf9989e73491b60a923a0eB3Ce1436A4604752)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5)
 */
export const cpaAddress = {
  420: '0x8cAf9989e73491b60a923a0eB3Ce1436A4604752',
  84531: '0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5',
} as const

/**
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x8cAf9989e73491b60a923a0eB3Ce1436A4604752)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5)
 */
export const cpaConfig = { address: cpaAddress, abi: cpaABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// nft
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x9e55B1C55Bb47fc58Badab6610B3445101c051dC)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x47625465f936920Efa00e33391125fCcfA106d84)
 */
export const nftABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: '_cpa', internalType: 'address', type: 'address' }],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'campaignId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CreateToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'nftContract',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CreateZoraContract',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'influencer', internalType: 'address', type: 'address' },
      { name: 'campaignId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnerSet',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'campaignId', internalType: 'uint256', type: 'uint256' },
      { name: 'campaignName', internalType: 'string', type: 'string' },
      { name: 'contractURI', internalType: 'string', type: 'string' },
    ],
    name: 'setUpNFT',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'campaignFactory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'influencersNftContract',
    outputs: [
      { name: 'campaignId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'zora', internalType: 'address', type: 'address' },
    ],
  },
] as const

/**
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x9e55B1C55Bb47fc58Badab6610B3445101c051dC)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x47625465f936920Efa00e33391125fCcfA106d84)
 */
export const nftAddress = {
  420: '0x9e55B1C55Bb47fc58Badab6610B3445101c051dC',
  84531: '0x47625465f936920Efa00e33391125fCcfA106d84',
} as const

/**
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x9e55B1C55Bb47fc58Badab6610B3445101c051dC)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x47625465f936920Efa00e33391125fCcfA106d84)
 */
export const nftConfig = { address: nftAddress, abi: nftABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link cpaABI}__.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x8cAf9989e73491b60a923a0eB3Ce1436A4604752)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5)
 */
export function useCpaRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof cpaABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof cpaABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof cpaAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractRead({
    abi: cpaABI,
    address: cpaAddress[chainId as keyof typeof cpaAddress],
    ...config,
  } as UseContractReadConfig<typeof cpaABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link cpaABI}__ and `functionName` set to `"campaignFactory"`.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x8cAf9989e73491b60a923a0eB3Ce1436A4604752)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5)
 */
export function useCpaCampaignFactory<
  TFunctionName extends 'campaignFactory',
  TSelectData = ReadContractResult<typeof cpaABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof cpaABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof cpaAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractRead({
    abi: cpaABI,
    address: cpaAddress[chainId as keyof typeof cpaAddress],
    functionName: 'campaignFactory',
    ...config,
  } as UseContractReadConfig<typeof cpaABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link cpaABI}__ and `functionName` set to `"influencersNftContract"`.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x8cAf9989e73491b60a923a0eB3Ce1436A4604752)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5)
 */
export function useCpaInfluencersNftContract<
  TFunctionName extends 'influencersNftContract',
  TSelectData = ReadContractResult<typeof cpaABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof cpaABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof cpaAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractRead({
    abi: cpaABI,
    address: cpaAddress[chainId as keyof typeof cpaAddress],
    functionName: 'influencersNftContract',
    ...config,
  } as UseContractReadConfig<typeof cpaABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link cpaABI}__.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x8cAf9989e73491b60a923a0eB3Ce1436A4604752)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5)
 */
export function useCpaWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof cpaAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof cpaABI, string>['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof cpaABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractWrite<typeof cpaABI, TFunctionName, TMode>({
    abi: cpaABI,
    address: cpaAddress[chainId as keyof typeof cpaAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link cpaABI}__ and `functionName` set to `"mint"`.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x8cAf9989e73491b60a923a0eB3Ce1436A4604752)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5)
 */
export function useCpaMint<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof cpaAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof cpaABI, 'mint'>['request']['abi'],
        'mint',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'mint' }
    : UseContractWriteConfig<typeof cpaABI, 'mint', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'mint'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractWrite<typeof cpaABI, 'mint', TMode>({
    abi: cpaABI,
    address: cpaAddress[chainId as keyof typeof cpaAddress],
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link cpaABI}__ and `functionName` set to `"setUpNFT"`.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x8cAf9989e73491b60a923a0eB3Ce1436A4604752)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5)
 */
export function useCpaSetUpNft<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof cpaAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof cpaABI, 'setUpNFT'>['request']['abi'],
        'setUpNFT',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setUpNFT' }
    : UseContractWriteConfig<typeof cpaABI, 'setUpNFT', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setUpNFT'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractWrite<typeof cpaABI, 'setUpNFT', TMode>({
    abi: cpaABI,
    address: cpaAddress[chainId as keyof typeof cpaAddress],
    functionName: 'setUpNFT',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link cpaABI}__.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x8cAf9989e73491b60a923a0eB3Ce1436A4604752)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5)
 */
export function usePrepareCpaWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof cpaABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof cpaAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return usePrepareContractWrite({
    abi: cpaABI,
    address: cpaAddress[chainId as keyof typeof cpaAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof cpaABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link cpaABI}__ and `functionName` set to `"mint"`.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x8cAf9989e73491b60a923a0eB3Ce1436A4604752)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5)
 */
export function usePrepareCpaMint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof cpaABI, 'mint'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof cpaAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return usePrepareContractWrite({
    abi: cpaABI,
    address: cpaAddress[chainId as keyof typeof cpaAddress],
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof cpaABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link cpaABI}__ and `functionName` set to `"setUpNFT"`.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x8cAf9989e73491b60a923a0eB3Ce1436A4604752)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5)
 */
export function usePrepareCpaSetUpNft(
  config: Omit<
    UsePrepareContractWriteConfig<typeof cpaABI, 'setUpNFT'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof cpaAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return usePrepareContractWrite({
    abi: cpaABI,
    address: cpaAddress[chainId as keyof typeof cpaAddress],
    functionName: 'setUpNFT',
    ...config,
  } as UsePrepareContractWriteConfig<typeof cpaABI, 'setUpNFT'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link cpaABI}__.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x8cAf9989e73491b60a923a0eB3Ce1436A4604752)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5)
 */
export function useCpaEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof cpaABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof cpaAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractEvent({
    abi: cpaABI,
    address: cpaAddress[chainId as keyof typeof cpaAddress],
    ...config,
  } as UseContractEventConfig<typeof cpaABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link cpaABI}__ and `eventName` set to `"CreateToken"`.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x8cAf9989e73491b60a923a0eB3Ce1436A4604752)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5)
 */
export function useCpaCreateTokenEvent(
  config: Omit<
    UseContractEventConfig<typeof cpaABI, 'CreateToken'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof cpaAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractEvent({
    abi: cpaABI,
    address: cpaAddress[chainId as keyof typeof cpaAddress],
    eventName: 'CreateToken',
    ...config,
  } as UseContractEventConfig<typeof cpaABI, 'CreateToken'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link cpaABI}__ and `eventName` set to `"CreateZoraContract"`.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x8cAf9989e73491b60a923a0eB3Ce1436A4604752)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5)
 */
export function useCpaCreateZoraContractEvent(
  config: Omit<
    UseContractEventConfig<typeof cpaABI, 'CreateZoraContract'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof cpaAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractEvent({
    abi: cpaABI,
    address: cpaAddress[chainId as keyof typeof cpaAddress],
    eventName: 'CreateZoraContract',
    ...config,
  } as UseContractEventConfig<typeof cpaABI, 'CreateZoraContract'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link cpaABI}__ and `eventName` set to `"OwnerSet"`.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x8cAf9989e73491b60a923a0eB3Ce1436A4604752)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5)
 */
export function useCpaOwnerSetEvent(
  config: Omit<
    UseContractEventConfig<typeof cpaABI, 'OwnerSet'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof cpaAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractEvent({
    abi: cpaABI,
    address: cpaAddress[chainId as keyof typeof cpaAddress],
    eventName: 'OwnerSet',
    ...config,
  } as UseContractEventConfig<typeof cpaABI, 'OwnerSet'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link nftABI}__.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x9e55B1C55Bb47fc58Badab6610B3445101c051dC)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x47625465f936920Efa00e33391125fCcfA106d84)
 */
export function useNftRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof nftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof nftABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof nftAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractRead({
    abi: nftABI,
    address: nftAddress[chainId as keyof typeof nftAddress],
    ...config,
  } as UseContractReadConfig<typeof nftABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link nftABI}__ and `functionName` set to `"campaignFactory"`.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x9e55B1C55Bb47fc58Badab6610B3445101c051dC)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x47625465f936920Efa00e33391125fCcfA106d84)
 */
export function useNftCampaignFactory<
  TFunctionName extends 'campaignFactory',
  TSelectData = ReadContractResult<typeof nftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof nftABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof nftAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractRead({
    abi: nftABI,
    address: nftAddress[chainId as keyof typeof nftAddress],
    functionName: 'campaignFactory',
    ...config,
  } as UseContractReadConfig<typeof nftABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link nftABI}__ and `functionName` set to `"influencersNftContract"`.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x9e55B1C55Bb47fc58Badab6610B3445101c051dC)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x47625465f936920Efa00e33391125fCcfA106d84)
 */
export function useNftInfluencersNftContract<
  TFunctionName extends 'influencersNftContract',
  TSelectData = ReadContractResult<typeof nftABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof nftABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof nftAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractRead({
    abi: nftABI,
    address: nftAddress[chainId as keyof typeof nftAddress],
    functionName: 'influencersNftContract',
    ...config,
  } as UseContractReadConfig<typeof nftABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link nftABI}__.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x9e55B1C55Bb47fc58Badab6610B3445101c051dC)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x47625465f936920Efa00e33391125fCcfA106d84)
 */
export function useNftWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof nftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof nftABI, string>['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof nftABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractWrite<typeof nftABI, TFunctionName, TMode>({
    abi: nftABI,
    address: nftAddress[chainId as keyof typeof nftAddress],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link nftABI}__ and `functionName` set to `"mint"`.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x9e55B1C55Bb47fc58Badab6610B3445101c051dC)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x47625465f936920Efa00e33391125fCcfA106d84)
 */
export function useNftMint<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof nftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof nftABI, 'mint'>['request']['abi'],
        'mint',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'mint' }
    : UseContractWriteConfig<typeof nftABI, 'mint', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'mint'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractWrite<typeof nftABI, 'mint', TMode>({
    abi: nftABI,
    address: nftAddress[chainId as keyof typeof nftAddress],
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link nftABI}__ and `functionName` set to `"setUpNFT"`.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x9e55B1C55Bb47fc58Badab6610B3445101c051dC)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x47625465f936920Efa00e33391125fCcfA106d84)
 */
export function useNftSetUpNft<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof nftAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof nftABI, 'setUpNFT'>['request']['abi'],
        'setUpNFT',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'setUpNFT' }
    : UseContractWriteConfig<typeof nftABI, 'setUpNFT', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'setUpNFT'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractWrite<typeof nftABI, 'setUpNFT', TMode>({
    abi: nftABI,
    address: nftAddress[chainId as keyof typeof nftAddress],
    functionName: 'setUpNFT',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link nftABI}__.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x9e55B1C55Bb47fc58Badab6610B3445101c051dC)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x47625465f936920Efa00e33391125fCcfA106d84)
 */
export function usePrepareNftWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof nftABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof nftAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return usePrepareContractWrite({
    abi: nftABI,
    address: nftAddress[chainId as keyof typeof nftAddress],
    ...config,
  } as UsePrepareContractWriteConfig<typeof nftABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link nftABI}__ and `functionName` set to `"mint"`.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x9e55B1C55Bb47fc58Badab6610B3445101c051dC)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x47625465f936920Efa00e33391125fCcfA106d84)
 */
export function usePrepareNftMint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof nftABI, 'mint'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof nftAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return usePrepareContractWrite({
    abi: nftABI,
    address: nftAddress[chainId as keyof typeof nftAddress],
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof nftABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link nftABI}__ and `functionName` set to `"setUpNFT"`.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x9e55B1C55Bb47fc58Badab6610B3445101c051dC)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x47625465f936920Efa00e33391125fCcfA106d84)
 */
export function usePrepareNftSetUpNft(
  config: Omit<
    UsePrepareContractWriteConfig<typeof nftABI, 'setUpNFT'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof nftAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return usePrepareContractWrite({
    abi: nftABI,
    address: nftAddress[chainId as keyof typeof nftAddress],
    functionName: 'setUpNFT',
    ...config,
  } as UsePrepareContractWriteConfig<typeof nftABI, 'setUpNFT'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nftABI}__.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x9e55B1C55Bb47fc58Badab6610B3445101c051dC)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x47625465f936920Efa00e33391125fCcfA106d84)
 */
export function useNftEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof nftABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof nftAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractEvent({
    abi: nftABI,
    address: nftAddress[chainId as keyof typeof nftAddress],
    ...config,
  } as UseContractEventConfig<typeof nftABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nftABI}__ and `eventName` set to `"CreateToken"`.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x9e55B1C55Bb47fc58Badab6610B3445101c051dC)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x47625465f936920Efa00e33391125fCcfA106d84)
 */
export function useNftCreateTokenEvent(
  config: Omit<
    UseContractEventConfig<typeof nftABI, 'CreateToken'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof nftAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractEvent({
    abi: nftABI,
    address: nftAddress[chainId as keyof typeof nftAddress],
    eventName: 'CreateToken',
    ...config,
  } as UseContractEventConfig<typeof nftABI, 'CreateToken'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nftABI}__ and `eventName` set to `"CreateZoraContract"`.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x9e55B1C55Bb47fc58Badab6610B3445101c051dC)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x47625465f936920Efa00e33391125fCcfA106d84)
 */
export function useNftCreateZoraContractEvent(
  config: Omit<
    UseContractEventConfig<typeof nftABI, 'CreateZoraContract'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof nftAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractEvent({
    abi: nftABI,
    address: nftAddress[chainId as keyof typeof nftAddress],
    eventName: 'CreateZoraContract',
    ...config,
  } as UseContractEventConfig<typeof nftABI, 'CreateZoraContract'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link nftABI}__ and `eventName` set to `"OwnerSet"`.
 *
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x9e55B1C55Bb47fc58Badab6610B3445101c051dC)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x47625465f936920Efa00e33391125fCcfA106d84)
 */
export function useNftOwnerSetEvent(
  config: Omit<
    UseContractEventConfig<typeof nftABI, 'OwnerSet'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof nftAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const chainId = config.chainId ?? chain?.id
  return useContractEvent({
    abi: nftABI,
    address: nftAddress[chainId as keyof typeof nftAddress],
    eventName: 'OwnerSet',
    ...config,
  } as UseContractEventConfig<typeof nftABI, 'OwnerSet'>)
}
