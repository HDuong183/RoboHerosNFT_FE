export type AddressType  = {
    97: string;
    56: string;
  }
  
  export enum CHAIN_ID {
    TESTNET = 97,
    MAINNET = 56,
  }
  
  export default function getChainIdFromEnv(): number {
    const env = process.env.NEXT_PUBLIC_CHAIN_ID;
    if (!env) { return 97;}
    return parseInt(env);
  }
  
  
  export const getRPC = () => {
    if (getChainIdFromEnv() === CHAIN_ID.MAINNET)
      return process.env.NEXT_PUBLIC_RPC_MAINNET;
    return process.env.NEXT_PUBLIC_RPC_TESTNET;
  }
  export const SMART_ADDRESS = {
    CROWD_SALE: {97: '0xa451604AcAB2F44b0A37DF39cE4774d7a45F35E9', 56: ''},
    USDT: {97: '0x61878236A27eee6beb0eb33B64c938FF0D22c4ef', 56: ''},
  }