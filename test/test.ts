import {expect} from 'chai'
import { ethers } from 'hardhat'
import {Contract} from '@ethersproject/contracts'
import {SignerWithAddress} from '@nomicfoundation/hardhat-ethers/signers'
import * as chai from 'chai'
const chaiAsPromised = require('chai as promised')
chai.use(chaiAsPromised);
import { keccak256 } from 'web3/node_modules/web3-utils'

 function parseEther(amount: Number) {
   return ethers.parseUnits(amount.toString(),18);
   
 }