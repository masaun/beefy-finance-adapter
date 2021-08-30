import chai, { expect } from "chai";
import { solidity } from "ethereum-waffle";
import { PoolItem } from "../types";

chai.use(solidity);

export function shouldBehaveLikeBeefyFinanceAdapter(token: string, pool: PoolItem): void {
  it(`should deposit and withdraw ${token} in ${token} pool of Beefy.finance`, async function () {
    await this.testDeFiAdapter.testGetDepositAllCodes(pool.tokens[0], pool.pool, this.beefyFinanceAdapter.address);
    expect(
      await this.beefyFinanceAdapter.getLiquidityPoolTokenBalance(
        this.testDeFiAdapter.address,
        this.testDeFiAdapter.address,
        pool.pool,
      ),
    ).to.be.gt(0);

    await this.testDeFiAdapter.testGetWithdrawAllCodes(pool.tokens[0], pool.pool, this.beefyFinanceAdapter.address);
    expect(
      await this.beefyFinanceAdapter.getLiquidityPoolTokenBalance(
        this.testDeFiAdapter.address,
        this.testDeFiAdapter.address,
        pool.pool,
      ),
    ).to.be.eq(0);
  });
}
