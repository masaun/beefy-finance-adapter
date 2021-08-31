import hre from "hardhat";
import { Artifact } from "hardhat/types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { getAddress } from "ethers/lib/utils";
import { BeefyFinanceAdapter } from "../../typechain/BeefyFinanceAdapter";
import { TestDeFiAdapter } from "../../typechain/TestDeFiAdapter";
import { LiquidityPool, Signers } from "../types";
import { shouldBehaveLikeBeefyFinanceAdapter } from "./BeefyFinanceAdapter.behavior";
import { default as BeefyFinancePools } from "../harvest.finance-pools.json";

const { deployContract } = hre.waffle;

/**
 * @notice - This is the test of the BeefyFinanceAdapter.sol
 */
describe("Unit tests of the BeefyFinanceAdapter", function () {
  before(async function () {
    this.signers = {} as Signers;
    const DAI_ADDRESS: string = getAddress("0x6b175474e89094c44da98b954eedeac495271d0f");
    const USDT_ADDRESS: string = getAddress("0xdac17f958d2ee523a2206206994597c13d831ec7");
    const DAI_WHALE: string = getAddress("0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503");
    const USDT_WHALE: string = getAddress("0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503");
    const signers: SignerWithAddress[] = await hre.ethers.getSigners();
    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [DAI_WHALE],
    });
    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [USDT_WHALE],
    });
    this.signers.admin = signers[0];
    this.signers.owner = signers[1];
    this.signers.deployer = signers[2];
    this.signers.alice = signers[3];
    this.signers.daiWhale = await hre.ethers.getSigner(DAI_WHALE);
    this.signers.usdtWhale = await hre.ethers.getSigner(USDT_WHALE);

    /// [Note]: Specify "IERC20V2" (IERC20V2.sol) as artifact in order to avoid that duplicated-artifact name of IERC20.sol between @openzeppelin/contracts v2.5.1 and v3.4.0 are used.
    /// [Note]: IERC20V2" (IERC20V2.sol) inherit @openzeppelin/contracts v2.5.1
    const dai = await hre.ethers.getContractAt("IERC20V2", DAI_ADDRESS, this.signers.daiWhale);
    //const dai = await hre.ethers.getContractAt("IERC20", DAI_ADDRESS, this.signers.daiWhale)
    const usdt = await hre.ethers.getContractAt("IERC20V2", USDT_ADDRESS, this.signers.usdtWhale);
    //const usdt = await hre.ethers.getContractAt("IERC20", USDT_ADDRESS, this.signers.usdtWhale)

    // deploy Harvest Finance Adapter
    const beefyFinanceAdapterArtifact: Artifact = await hre.artifacts.readArtifact("BeefyFinanceAdapter");
    this.beefyFinanceAdapter = <BeefyFinanceAdapter>(
      await deployContract(this.signers.deployer, beefyFinanceAdapterArtifact)
    );

    // deploy TestDeFiAdapter Contract
    const testDeFiAdapterArtifact: Artifact = await hre.artifacts.readArtifact("TestDeFiAdapter");
    this.testDeFiAdapter = <TestDeFiAdapter>await deployContract(this.signers.deployer, testDeFiAdapterArtifact);

    // fund the whale's wallet with gas
    await this.signers.admin.sendTransaction({ to: DAI_WHALE, value: hre.ethers.utils.parseEther("10") });
    await this.signers.admin.sendTransaction({ to: USDT_WHALE, value: hre.ethers.utils.parseEther("10") });

    // fund TestDeFiAdapter with 10000 tokens each
    await dai.transfer(this.testDeFiAdapter.address, hre.ethers.utils.parseEther("10000"));
    await usdt.transfer(this.testDeFiAdapter.address, hre.ethers.utils.parseUnits("10000", 6));
  });

  describe("BeefyFinanceAdapter", function () {
    Object.keys(BeefyFinancePools).map((token: string) => {
      /// [Todo]: Update contract addresses in the BeefyFinancePools (beefy.finance-pools.json)
      shouldBehaveLikeBeefyFinanceAdapter(token, (BeefyFinancePools as LiquidityPool)[token]);
    });
  });
});
