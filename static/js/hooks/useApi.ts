import { baseApiUrl } from "utils";

/* eslint-disable camelcase */

export interface NFTTranaction {
  timestamp?: number;
  txhash?: string;
  itemCollection?: string;
  tokenId?: number;
  from?: string;
  to?: string;
  price?: number;
}

export interface NFTItem {
  itemCollection?: string;
  tokenId?: number;

  timestamp?: number;
  owner?: string;
  itemOwner?: string;

  name?: string;
  description?: string;
  image?: string;

  bValid?: boolean;
  pairId?: string;
  price?: number;
  listTimestamp?: number;

  tranactions?: NFTTranaction[];

  TEST?: string;
}

export interface NFTMarketStatus {
  totalItems?: number;
  totalOwners?: number;
  totalTranactions?: number;
  totalVolumn?: number;
  floorPrice?: number;
  bestOffer?: number;
}

export const apiGetTokenIdsOfOwner = async (ownerAddress: string) => {
  try {
    if (ownerAddress && ownerAddress.length > 0) {
      const strUrl = `${baseApiUrl}/tokenIds/${ownerAddress}`;
      const response = await fetch(strUrl);
      if (response.status === 200) {
        const responseData = await response.json();
        const nftTokenList: number[] = responseData;
        return nftTokenList;
      }
    }
  } catch (error) {
    console.error("Unable to fetch data:", error);
  }
  return null;
};

export const apiGetItemsOfOwner = async (
  ownerAddress: string,
  start?: number,
  limit?: number,
  sortField?: string,
  sortOrder?: string,
  listed?: string,
) => {
  try {
    if (ownerAddress && ownerAddress.length > 0) {
      const strUrl = `${baseApiUrl}/items/${ownerAddress}?start=${start}&limit=${limit}&sortField=${sortField}&sortOrder=${sortOrder}&listed=${listed}`;
      const response = await fetch(strUrl);
      if (response.status === 200) {
        const responseData = await response.json();
        const nftObjectList: NFTItem[] = responseData;
        return nftObjectList;
      }
    }
  } catch (error) {
    console.error("Unable to fetch data:", error);
  }
  return null;
};

export const apiGetAllItems = async (
  start?: number,
  limit?: number,
  sortField?: string,
  sortOrder?: string,
  listed?: string,
) => {
  try {
    const strUrl = `${baseApiUrl}/items?start=${start}&limit=${limit}&sortField=${sortField}&sortOrder=${sortOrder}&listed=${listed}`;
    const response = await fetch(strUrl);
    if (response.status === 200) {
      const responseData = await response.json();
      const nftObjectList: NFTItem[] = responseData;
      return nftObjectList;
    }
  } catch (error) {
    console.error("Unable to fetch data:", error);
  }

  return null;
};

export const apiGetTranactions = async (limit?: number) => {
  try {
    const strUrl = `${baseApiUrl}/tranactions?limit=${limit}`;
    const response = await fetch(strUrl);
    if (response.status === 200) {
      const responseData = await response.json();
      const nftObjectList: NFTTranaction[] = responseData;
      return nftObjectList;
    }
  } catch (error) {
    console.error("Unable to fetch data:", error);
  }
  return null;
};

export const apiGetMarketStatus = async () => {
  try {
    const strUrl = `${baseApiUrl}/marketStatus`;
    const response = await fetch(strUrl);
    if (response.status === 200) {
      const responseData = await response.json();
      const nftObjectList: NFTMarketStatus = responseData;
      return nftObjectList;
    }
  } catch (error) {
    console.error("Unable to fetch data:", error);
  }
  return null;
};
