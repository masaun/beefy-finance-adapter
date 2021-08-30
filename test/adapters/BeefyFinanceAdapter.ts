import hre from "hardhat";
import { Artifact } from "hardhat/types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { getAddress } from "ethers/lib/utils";
import { BeefyFinanceAdapter } from "../../typechain/BeefyFinanceAdapter";
import { TestDeFiAdapter } from "../../typechain/TestDeFiAdapter";
import { LiquidityPool, Signers } from "../types";
import { shouldBehaveLikeHarvestFinanceAdapter } from "./HarvestFinanceAdapter.behavior";
import { default as HarvestFinancePools } from "../harvest.finance-pools.json";

const { deployContract } = hre.waffle;

describe("Unit tests of the BeefyFinanceAdapter", function () {
  /// [Todo]:
});
