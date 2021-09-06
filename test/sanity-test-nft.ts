import { address1, nftGame, prepareForTests } from "./test-base";
import { FeeMethod, HowToCall, Order, OrderSide, SaleKind, WyvernAsset, WyvernSchemaName } from "opensea-js/lib/types";
import BigNumber from "bignumber.js";

describe("---------- NFT Game ---------- ", () => {
  beforeEach(async () => {
    await prepareForTests();
  });

  it("After Deploying", async () => {
    // const order: Order = {
    //   feeMethod: FeeMethod.SplitFee,
    //   hash: "",
    //   howToCall: HowToCall.Call,
    //   makerReferrerFee: new BigNumber(1),
    //   metadata: {
    //     asset: {
    //       id: "",
    //       address: ""
    //       },
    //     schema: WyvernSchemaName.ERC721
    //   },
    //   quantity: new BigNumber(1),
    //   saleKind: SaleKind.FixedPrice,
    //   side: OrderSide.Sell,
    //   waitingForBestCounterOrder: false
    // };

    // [order.exchange, order.maker, order.taker, order.feeRecipient, order.target, order.staticTarget, order.paymentToken],
    //   [order.makerRelayerFee, order.takerRelayerFee, order.makerProtocolFee, order.takerProtocolFee, order.basePrice, order.extra, order.listingTime, order.expirationTime, order.salt],
    //   order.feeMethod,
    //   order.side,
    //   order.saleKind,
    //   order.howToCall,
    //   order.calldata,
    //   order.replacementPattern,
    //   order.staticExtradata,
    //   includeInOrderBook,

    await nftGame.methods.makeABuyOrder().send({ from: address1 });
  });
});
