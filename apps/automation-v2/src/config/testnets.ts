import { parseEther } from 'ethers';
import { SEPOLIA } from '@/chains';
import { TlcBatchLiquidateConfig } from '@/tlc/batch-liquidate';

const TLC_BATCH_LIQUIDATE_CONFIG: TlcBatchLiquidateConfig = {
  CHAIN: SEPOLIA,
  WALLET_NAME: 'temple_automation_testnet',
  TLC_ADDRESS: '0xAe0A4a7690F5f308C6615E3738243Ab629DaEAEA',
  ACC_LIQ_MAX_CHUNK_NO: 2,
  MIN_ETH_BALANCE_WARNING: parseEther('0.1'),
  GAS_LIMIT: 1_000_000n,
  SUBGRAPH_URL: 'https://api.studio.thegraph.com/proxy/520/v2-sepolia/version/latest',
  SUBGRAPH_ALCHEMY_URL: '',
  SUBGRAPH_RETRY_LIMIT: 3,
};

export const CONFIG = {
  tlcBatchLiquidate: TLC_BATCH_LIQUIDATE_CONFIG,
};
