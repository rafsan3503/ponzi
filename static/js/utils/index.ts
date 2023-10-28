import { Contract } from "@ethersproject/contracts";
import PonziNFTABI from "contracts/PonziNFT.json";
import MarketABI from "contracts/Market.json";
import PonziTokenABI from "contracts/PonziToken.json";
import PonziAirdropABI from "contracts/PonziAirdrop.json";
import DividendDistributorABI from "contracts/DividendDistributor.json";
import DAITokenABI from "contracts/DAIToken.json";

export const Networks = {
  ETHMainnet: 1,
  GoerliTestnet: 5,
};

export const CONTRACTS_BY_NETWORK = {
  [Networks.ETHMainnet]: {
    PonziNFT: {
      address: "0xC0f6CC4b7E67f0518851068601c9f7c4ef18B201",
      abi: PonziNFTABI,
    },
    Market: {
      address: "0x78eb94D0630e4302359226feeaC70593410580b3",
      abi: MarketABI,
    },
    PonziToken: {
      address: "0x4ef3762459b5795113bE3a63Eae9dfa7FB47d15E",
      abi: PonziTokenABI,
    },
    DividendDistributor: {
      address: "0xB7f82CEBaa4C5D598d5e1C2C4D4DbAEaB62b3692",
      abi: DividendDistributorABI,
    },
    DAIToken: {
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      abi: DAITokenABI,
    },
    PonziAirdrop: {
      address: "0x5922120863fC8Ff5953d81b36250eCD71AF6C12C",
      abi: PonziAirdropABI,
    },
  },
  [Networks.GoerliTestnet]: {
    PonziNFT: {
      address: "0xf05050032db6b1AAbF71fa94ffB658325C33f4b3",
      abi: PonziNFTABI,
    },
    Market: {
      address: "0xc16716AEe1DbA922711dEFB5b57176c6bdc2B7cC",
      abi: MarketABI,
    },
    PonziToken: {
      address: "0xa40Fc6Ba0669767EE70297C554108B154F4e4569",
      abi: PonziTokenABI,
    },
    DividendDistributor: {
      address: "0xdcf8DB2E845915d4f9ddc68FdE598d032cBd1281",
      abi: DividendDistributorABI,
    },
    DAIToken: {
      address: "0x77B8A764B5A8201fe7ed16d7bA80A42Ac80c174D",
      abi: DAITokenABI,
    },
  },
};

export const currentNetwork = process.env.REACT_APP_NETWORK_ID;

export const baseApiUrl = process.env.REACT_APP_API_URL;

export function getContractInfo(name, chainId = null) {
  if (!chainId) chainId = currentNetwork;

  const contracts = CONTRACTS_BY_NETWORK?.[chainId];
  if (contracts) {
    return contracts?.[name];
  } else {
    return null;
  }
}

export function truncateWalletString(walletAddress) {
  if (!walletAddress) return walletAddress;
  const lengthStr = walletAddress.length;
  const startStr = walletAddress.substring(0, 7);
  const endStr = walletAddress.substring(lengthStr - 7, lengthStr);
  return startStr + "..." + endStr;
}

export function truncateHashString(txhash) {
  if (!txhash) return txhash;
  const lengthStr = txhash.length;
  const startStr = txhash.substring(0, 10);
  const endStr = txhash.substring(lengthStr - 10, lengthStr);
  return startStr + "..." + endStr;
}

export function getContractObj(name, chainId, provider) {
  const info = getContractInfo(name, chainId);
  return !!info && new Contract(info.address, info.abi, provider);
}

export function getContractObjWithAddress(
  name,
  chainId,
  provider,
  contractAddress,
) {
  const info = getContractInfo(name, chainId);
  return !!info && new Contract(contractAddress, info.abi, provider);
}

export const shorter = (str) =>
  str?.length > 8 ? str.slice(0, 6) + "..." + str.slice(-4) : str;

export function truncateString(str: string, length: number) {
  return str.length <= length ? str : str.substring(0, length) + "...";
}
