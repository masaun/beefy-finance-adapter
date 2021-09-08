# Beefy.finance adapter for OptyFi

## 【Introduction of the Beefy.finance adapter for OptyFi】

- This is the smart contract that build an integration with the `Beefy Finance` ’s liquidity pools on Polygon using ``OptyFi's DeFi Adapter interface` .

<br>

## 【Implemented-files】

- Smart contracts
  - ./contracts/adapters/BeefyFinanceAdapter.sol: https://github.com/masaun/beefy-finance-adapter/blob/main/contracts/adapters/BeefyFinanceAdapter.sol
  - ./contracts/beefy.finance/: https://github.com/masaun/beefy-finance-adapter/tree/main/contracts/beefy.finance

<br>

- Unit tests
  - ./test/adapters/BeefyFinanceAdapter.behavior.ts: https://github.com/masaun/beefy-finance-adapter/blob/main/test/adapters/BeefyFinanceAdapter.behavior.ts
  - ./test/adapters/BeefyFinanceAdapter.ts: https://github.com/masaun/beefy-finance-adapter/blob/main/test/adapters/BeefyFinanceAdapter.ts

<br>

## 【Remarks】

- Versions:
  - Solidity (Solc): v0.6.12
  - Hardhat: v2.5.0
  - ether.js: v5.4.4
  - @openzeppelin/contracts: v2.5.1 and v3.4.0 (Both version are used in this repo)

<br>

## 【Setup】

- ① Install

```
yarn install
```

<br>

- ② Compile the smart contracts with Hardhat

```
yarn compile
```

<br>

- ③ Compile the smart contracts and generate TypeChain artifacts

```
yarn typechain
```

<br>

## 【Unit test】

- Unit tests of the `BeefyFinanceAdapter`

```
yarn test
```

<br>

## 【Demo】

- Demo video of unit test:
  https://youtu.be/0rhAdGg2JuY

<br>

## 【Reference】

- Opty.fi
  - DeFi Adapter Kit: https://github.com/Opty-Fi/defi-adapter-kit
  - Doc: https://docs.opty.fi/intro/how-optyfi-works
  - Website: https://opty.fi/

<br>

- Beefy.finance
  - Smart contract: https://github.com/beefyfinance/beefy-protocol
  - Doc: https://docs.beefy.finance/beefyfinance/
  - dApp: https://www.beefy.finance/
