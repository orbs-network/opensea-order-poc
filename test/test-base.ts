import { account, deployArtifact, resetNetworkFork, tag, useChaiBN } from "@defi.org/web3-candies";
import { NFTGame } from "../typechain-hardhat/NFTGame";

export let deployer: string;
export let address1: string;
export let devWallet: string;
export let nftGame: NFTGame;

useChaiBN();

export async function prepareForTests() {
  while (true) {
    try {
      return await doInitState();
    } catch (e) {
      console.error(e, "\ntrying again...");
    }
  }
}

async function doInitState() {
  await resetNetworkFork();

  deployer = await account(0);
  tag(deployer, "deployer");

  address1 = await account(1);
  devWallet = await account(2);
  nftGame = await deployArtifact<NFTGame>("NFTGame", { from: deployer }, [
    "0xa5409ec958c83c3f309868babaca7c86dcb077c1", // 0xf57b2c51ded3a29e6891aba85459d600256cf317 - rinkeby
  ]);
}
